import { StyleSheet, View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { HourlyTimelineItem } from '../../molecules';

const StyledScrollView = styled.ScrollView`
  flex: 1;
  padding-left: 5%;
`;

const dummyList = Array(8);

const HourlyForecastTimeline = () => {
  return (
    <StyledScrollView horizontal>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['white', 'transparent']}
        style={styles.gradient}
      />
      {[1, 2, 3, 5, 6, 4, 2, 10].map((item, index) => (
        <HourlyTimelineItem key={index} />
      ))}
    </StyledScrollView>
  );
};

export default HourlyForecastTimeline;

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    width: '90%',
    height: 5,
    top: 52,
    left: 20,
  },
});
