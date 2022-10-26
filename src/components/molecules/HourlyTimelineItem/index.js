import styled from 'styled-components/native';
import { Text } from '../../atoms';
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

const HourlyTimelineItem = ({ item, isNow, timezone }) => {
  dayjs.tz.setDefault(timezone);
  return (
    <StyledView>
      <Text bold={isNow} fontSize={isNow ? 20 : 14}>
        {!isNow
          ? dayjs(item.dt * 1000)
              .tz()
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
