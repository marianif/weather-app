import { View } from 'react-native';
import { CurrentWeatherList } from '../../components/organism';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCitiesForecast } from '../../store/forecastSlice';
import { useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const { currentWeatherList } = useSelector((state) => state.forecasts);

  useEffect(() => {
    dispatch(fetchCitiesForecast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <CurrentWeatherList items={currentWeatherList} />
    </View>
  );
};

export default Home;
