import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../atoms';

const { width } = Dimensions.get('window');

const StyledView = styled.View`
  height: 90%;
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
  width: 40%;
  aspect-ratio: 1;
`;

const HourlyTimelineItem = () => {
  return (
    <StyledView>
      <Text>Now</Text>
      <Circle />
      <Text fontSize={'18px'}>22°</Text>
    </StyledView>
  );
};

export default HourlyTimelineItem;
