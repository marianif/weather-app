import React from 'react';
import { Text } from '../../atoms';
import styled from 'styled-components/native';

const StyledView = styled.View`
  display: flex;
  align-items: center;
`;

const DateAndWeather = ({ weather }) => {
  return (
    <StyledView>
      <Text bold fontSize={'20px'}>
        Friday 18, september
      </Text>
      <Text fontSize={'20px'}>{weather.main}</Text>
    </StyledView>
  );
};

export default DateAndWeather;
