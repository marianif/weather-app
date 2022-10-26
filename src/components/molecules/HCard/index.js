import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Text, WeatherIcon } from '../../atoms';
import { gradients } from '../../../theme';
import { StyleSheet, View } from 'react-native';

// dayjs imports
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
// dayjs config
dayjs.extend(utc);

const StyledView = styled.Pressable`
  display: flex;
  width: 100%;
  aspect-ratio: 2.8;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  padding-left: 5%;
`;

const StyledCol = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const HCard = ({ item, onPress }) => {
  const {
    current: { weather, temp },
    name,
    timezone_offset,
  } = item;

  return (
    <LinearGradient
      colors={gradients?.[weather[0].main.toLowerCase()] || gradients.default}
      start={{ x: 0, y: 1 }}
      end={{ y: 0, x: 1 }}
      style={styles.gradient}>
      <StyledView onPress={onPress}>
        <StyledCol>
          <Text fontSize={26} bold>
            {name}
          </Text>
          <Text fontSize={14}>
            {dayjs()
              .utcOffset(timezone_offset / 60)
              .format('dddd DD, MMMM')}
          </Text>
          <Text fontSize={12}>
            {dayjs()
              .utcOffset(timezone_offset / 60)
              .format('h.mm a')}
          </Text>
        </StyledCol>
        <StyledCol>
          <WeatherIcon icon={weather[0].icon} />
        </StyledCol>
        <StyledCol>
          <Text fontSize={42} bold center>
            {Math.round(temp)}°
          </Text>
        </StyledCol>
      </StyledView>
    </LinearGradient>
  );
};

export default HCard;

const styles = StyleSheet.create({
  gradient: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 18,
  },
});
