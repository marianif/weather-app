import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentWeather } from '../helpers/forecasts';
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
        return { ...weather, name: city };
      }),
    );

    return response;
  },
);

export const forecastSlice = createSlice({
  name: 'forecasts',
  initialState: {
    cities: ['Turin', 'London', 'Rome', 'Madrid', 'Boston'],
    currentWeatherList: [],
    currentCity: {},
    currentCityForecast: {
      hourly: [],
      daily: [],
    },
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
