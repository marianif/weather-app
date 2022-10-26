import React from 'react';
import { Text } from '../../atoms';
import styled from 'styled-components/native';
// dayjs imports
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';
// dayjs config
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(dayjsRelativeTime);
dayjs.extend(advancedFormat);

const StyledView = styled.View`
  display: flex;
  align-items: center;
`;

const DateAndWeather = ({ weather, timezone }) => {
  dayjs.tz.setDefault(timezone);

  return (
    <StyledView>
      <Text bold fontSize={20}>
        {dayjs().tz().format('dddd D, MMMM')}
      </Text>
      <Text fontSize={20}>{weather.main}</Text>
    </StyledView>
  );
};

export default DateAndWeather;
