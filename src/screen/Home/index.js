import { SafeAreaView, View } from 'react-native';
import { Text } from '../../components/atoms';
import { CurrentWeatherList } from '../../components/organism';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const cities = [
  {
    cityName: 'London',
    currentDate: dayjs().format('dddd DD, MMMM'),
    currentTime: dayjs().format('H.mm a'),
    weather: {
      main: 'Clouds',
      icon: '03d',
    },
    temp: '18°',
  },
  {
    cityName: 'Turin',
    currentDate: dayjs().format('dddd DD, MMMM'),
    currentTime: dayjs().format('H.mm a'),
    weather: {
      main: 'Sunny',
      icon: '03d',
    },
    temp: '22°',
  },
  {
    cityName: 'Rome',
    currentDate: dayjs().format('dddd DD, MMMM'),
    currentTime: dayjs().format('H.mm a'),
    weather: {
      main: 'Rainy',
      icon: '03d',
    },
    temp: '22°',
  },
];

const Home = () => {
  const { selectedCities } = useSelector(state => state.ui);
  return (
    <SafeAreaView>
      <CurrentWeatherList cities={cities} />
    </SafeAreaView>
  );
};

export default Home;
