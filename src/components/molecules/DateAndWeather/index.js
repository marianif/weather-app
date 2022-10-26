import React from 'react';
import { Text } from '../../atoms';
import styled from 'styled-components/native';
// dayjs imports
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
// dayjs config
dayjs.extend(utc);

const StyledView = styled.View`
  display: flex;
  align-items: center;
`;

const DateAndWeather = ({ weather, tzOffset }) => {
  return (
    <StyledView>
      <Text bold fontSize={20}>
        {dayjs()
          .utcOffset(tzOffset / 60)
          .format('dddd D, MMMM')}
      </Text>
      <Text fontSize={20}>{weather.main}</Text>
    </StyledView>
  );
};

export default DateAndWeather;
