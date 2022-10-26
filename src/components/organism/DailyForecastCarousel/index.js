import { View, FlatList } from 'react-native';
import { VCard } from '../../molecules';

const DailyForecastCarousel = ({ items }) => {
  const renderItem = ({ item, index }) => <VCard key={index} item={item} />;
  return (
    <View style={{ height: '45%' }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: '5%' }}
      />
    </View>
  );
};

export default DailyForecastCarousel;
