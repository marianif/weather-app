import styled from 'styled-components/native';
import { Text } from '../../atoms';
import { useEffect } from 'react';
// dayjs imports
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
// dayjs config
dayjs.extend(utc);
const StyledView = styled.View`
  height: 100%;
  width: 60px;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 25px;
`;

const Circle = styled.View`
  background-color: white;
  border-radius: 100px;
  width: ${({ isNow }) => (isNow ? '45%' : '35%')};
  aspect-ratio: 1;
`;

const HourlyTimelineItem = ({ item, isNow, tzOffset }) => {
  return (
    <StyledView>
      <Text bold={isNow} fontSize={isNow ? 20 : 14}>
        {!isNow
          ? dayjs(item.dt * 1000)
              .utcOffset(tzOffset / 60)
              .format('h a')
          : 'Now'}
      </Text>
      <Circle isNow={isNow} />
      <Text fontSize={!isNow ? 18 : 20} bold={isNow}>
        {Math.round(item.temp)}°
      </Text>
    </StyledView>
  );
};

export default HourlyTimelineItem;
