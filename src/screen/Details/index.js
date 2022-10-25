import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { gradients } from '../../theme';
import {
  CurrentWeatherDetail,
  DailyForecastCarousel,
  HourlyForecastTimeline,
} from '../../components/organism';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const Details = () => {
  const { detailsBg } = useSelector((state) => state.ui);
  const { currentCity } = useSelector((state) => state.forecasts);
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <LinearGradient
      colors={detailsBg}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: headerHeight,
        paddingBottom: tabBarHeight,
      }}>
      <CurrentWeatherDetail currentCity={currentCity} />
      <HourlyForecastTimeline />
      <DailyForecastCarousel />
    </LinearGradient>
  );
};

export default Details;
