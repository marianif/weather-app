import { SafeAreaView, View } from 'react-native';
import { Text } from '../../components/atoms';
import { CurrentWeatherList } from '../../components/organism';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCitiesForecast } from '../../store/forecastSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { currentWeatherList } = useSelector((state) => state.forecasts);

  useEffect(() => {
    dispatch(fetchCitiesForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <CurrentWeatherList items={currentWeatherList} />
    </SafeAreaView>
  );
};

export default Home;
