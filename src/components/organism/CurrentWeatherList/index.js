import { View, FlatList } from 'react-native';
import { HCard, AddCityBtn } from '../../molecules';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDetailsTheme } from '../../../store/uiSlice';
import {
  fetchCurrentCityForecast,
  setCurrentCity,
} from '../../../store/forecastSlice';

const CurrentWeatherList = ({ items }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onCardPress = (item) => {
    const currentWeather = item.weather[0].main.toLowerCase();
    dispatch(setDetailsTheme(currentWeather));
    dispatch(fetchCurrentCityForecast(item.name));
    dispatch(setCurrentCity(item));
    navigation.navigate('Details', { city: item.name });
  };

  const renderItem = ({ item, i }) => (
    <HCard item={item} key={i} onPress={() => onCardPress(item)} />
  );
  return (
    <FlatList
      ListHeaderComponent={<AddCityBtn />}
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={<View style={{ height: 20 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrentWeatherList;
