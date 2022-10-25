import { OPENWEATHER_API_KEY } from '@env';

export const fetchCurrentWeather = async ({ lat, lon }) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`,
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
};

export const fetchForecasts = async ({ lat, lon }) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`,
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
};
