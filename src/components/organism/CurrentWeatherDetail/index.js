import { View, Text } from 'react-native';
import React from 'react';
import { TempContainer, DateAndWeather } from '../../molecules';

const CurrentWeatherDetail = ({ currentCity }) => {
  const weather = currentCity.weather[0];
  const temp = currentCity.main.temp;
  return (
    <View style={{ flex: 2 }}>
      <DateAndWeather weather={weather} />
      <TempContainer temp={temp} icon={weather.icon} />
    </View>
  );
};

export default CurrentWeatherDetail;
