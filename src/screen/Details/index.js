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
import dayjs from 'dayjs';
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

const Details = ({ route: { params } }) => {
  const { detailsBg } = useSelector((state) => state.ui);
  const { currentWeatherList } = useSelector((state) => state.forecasts);
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  const currentCity = currentWeatherList.find(
    (item) => item.name === params.city,
  );

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
      <HourlyForecastTimeline
        timeline={currentCity.hourly.slice(0, 12)}
        timezone={currentCity.timezone}
      />
      <DailyForecastCarousel items={currentCity.daily.slice(1)} />
    </LinearGradient>
  );
};

export default Details;
