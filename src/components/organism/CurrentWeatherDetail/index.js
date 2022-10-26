import { View } from 'react-native';
import React from 'react';
import { TempContainer, DateAndWeather } from '../../molecules';

const CurrentWeatherDetail = ({ currentCity }) => {
  const { weather, temp } = currentCity.current;
  const { timezone_offset } = currentCity;

  return (
    <View
      style={{
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <DateAndWeather weather={weather[0]} tzOffset={timezone_offset} />
      <TempContainer temp={temp} icon={weather[0].icon} />
    </View>
  );
};

export default CurrentWeatherDetail;
