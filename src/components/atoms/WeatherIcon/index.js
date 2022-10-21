import { View, Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const URL = 'http://openweathermap.org/img/wn/10d@2x.png';

const WeatherIcon = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Image
        source={{ uri: URL }}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </View>
  );
};

export default WeatherIcon;
