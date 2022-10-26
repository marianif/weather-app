import { View, FlatList } from 'react-native';
import { HCard, AddCityBtn } from '../../molecules';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setDetailsTheme } from '../../../store/uiSlice';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const CurrentWeatherList = ({ items }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  const onCardPress = (item) => {
    const { weather } = item.current;
    const currentWeather = weather[0].main.toLowerCase();
    dispatch(setDetailsTheme(currentWeather));
    navigation.navigate('Details', { city: item.name });
  };

  const renderItem = ({ item, i }) => (
    <HCard item={item} key={i} onPress={() => onCardPress(item)} />
  );
  return (
    <FlatList
      ListHeaderComponent={<AddCityBtn />}
      contentContainerStyle={{ paddingBottom: tabBarHeight + 20 }}
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={<View style={{ height: 20 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrentWeatherList;
