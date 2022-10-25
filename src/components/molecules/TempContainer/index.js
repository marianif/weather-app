import { View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { WeatherIcon, Text } from '../../atoms';

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 2;
`;

const StyledCol = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const TempContainer = ({ temp, icon }) => {
  return (
    <StyledContainer>
      <StyledCol>
        <WeatherIcon icon={icon} />
      </StyledCol>
      <StyledCol>
        <Text fontSize={'95px'} bold center>
          {Math.round(temp)}°
        </Text>
      </StyledCol>
    </StyledContainer>
  );
};

export default TempContainer;
