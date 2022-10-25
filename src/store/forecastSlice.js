import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentWeather, fetchForecasts } from '../helpers/forecasts';
import { geocode } from '../helpers/geocode';

export const fetchCitiesForecast = createAsyncThunk(
  'users/fetchCitiesForecast',
  async (_, { getState }) => {
    const {
      forecasts: { cities },
    } = getState();

    const response = await Promise.all(
      cities.map(async (city) => {
        const coords = await geocode(city);
        const weather = await fetchCurrentWeather(coords);
        return weather;
      }),
    );

    return response;
  },
);

export const fetchCurrentCityForecast = createAsyncThunk(
  'users/fetchCurrentCityForecast',
  async (city) => {
    const coords = await geocode(city);
    const forecast = await fetchForecasts(coords);

    console.log(forecast);
    return forecast;
  },
);

export const forecastSlice = createSlice({
  name: 'forecasts',
  initialState: {
    cities: ['Turin', 'London', 'Rome'],
    currentWeatherList: [],
    currentCity: {},
    fetchStatus: 'pending',
  },
  reducers: {
    setCurrentCity: (state, { payload }) => {
      state.currentCity = payload;
    },
  },
  extraReducers: {
    [fetchCitiesForecast.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled';
      state.currentWeatherList = payload;
    },
  },
});

export const { setCurrentCity } = forecastSlice.actions;

export default forecastSlice.reducer;
