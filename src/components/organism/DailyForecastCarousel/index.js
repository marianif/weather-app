import { View, Text, ScrollView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { VCard } from '../../molecules';

const dummyData = [
  {
    day: 'Saturday',
    temp: '18°',
    icon: '02d.png',
  },
  {
    day: 'Sunday',
    temp: '18°',
    icon: '02d.png',
  },
  {
    day: 'Monday',
    temp: '18°',
    icon: '02d.png',
  },
  {
    day: 'Saturday',
    temp: '18°',
    icon: '02d.png',
  },
  {
    day: 'Saturday',
    temp: '18°',
    icon: '02d.png',
  },
];

const StyledScrollView = styled.ScrollView`
  padding: 5%;
  flex: 2;
`;

const DailyForecastCarousel = () => {
  return (
    <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dummyData.map((item, index) => (
        <VCard item={item} key={index} />
      ))}
    </StyledScrollView>
  );
};

export default DailyForecastCarousel;
