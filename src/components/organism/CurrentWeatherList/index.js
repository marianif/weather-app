import { View, FlatList } from 'react-native';
import { HCard, AddCityBtn } from '../../molecules';
import { useNavigation } from '@react-navigation/native';

const CurrentWeatherList = ({ cities }) => {
  const navigation = useNavigation();

  const renderItem = ({ item, i }) => (
    <HCard
      item={item}
      key={i}
      onPress={() => navigation.navigate('Details', { ...item })}
    />
  );
  return (
    <FlatList
      ListHeaderComponent={<AddCityBtn />}
      data={cities}
      renderItem={renderItem}
      ItemSeparatorComponent={<View style={{ height: 20 }} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CurrentWeatherList;
