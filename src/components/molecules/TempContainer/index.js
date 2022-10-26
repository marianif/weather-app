import { View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { WeatherIcon, Text } from '../../atoms';

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5% 5% 5%;
`;

const StyledCol = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const TempContainer = ({ temp, icon }) => {
  return (
    <StyledView>
      <StyledCol>
        <WeatherIcon icon={icon} />
      </StyledCol>
      <StyledCol>
        <Text fontSize={95} bold center>
          {Math.round(temp)}°
        </Text>
      </StyledCol>
    </StyledView>
  );
};

export default TempContainer;
