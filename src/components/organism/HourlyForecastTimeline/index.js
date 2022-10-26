import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { HourlyTimelineItem } from '../../molecules';

const HourlyForecastTimeline = ({ timeline, tzOffset }) => {
  return (
    <View style={{ height: '20%' }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: '5%' }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['white', 'transparent']}
          style={styles.gradient}
        />
        {timeline.map((item, index) => (
          <HourlyTimelineItem
            key={index}
            item={item}
            isNow={index === 0}
            tzOffset={tzOffset}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HourlyForecastTimeline;

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    width: '90%',
    height: '5%',
    top: '45%',
    left: 20,
  },
});
