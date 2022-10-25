import { OPENWEATHER_API_KEY } from '@env';

export const geocode = async (city) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHER_API_KEY}`,
    );

    const [item] = await res.json();
    // const [coords] = data;
    return { lat: item.lat, lon: item.lon };
  } catch (error) {
    console.warn(error);
  }
};
