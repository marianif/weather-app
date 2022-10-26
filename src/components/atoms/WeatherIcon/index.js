import { Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { WEATHER_ICON_BASE_URL } from '@env';

const StyledContainer = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const WeatherIcon = ({ icon }) => {
  return (
    <StyledContainer>
      <Image
        source={{ uri: `${WEATHER_ICON_BASE_URL}/${icon}.png` }}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </StyledContainer>
  );
};

export default WeatherIcon;
