import { OPENWEATHER_API_KEY } from '@env';

export const fetchCurrentWeather = async ({ lat, lon }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely&appid=${OPENWEATHER_API_KEY}`,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
};
