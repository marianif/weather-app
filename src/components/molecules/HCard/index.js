import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Text, WeatherIcon } from '../../atoms';
import { gradients } from '../../../theme';
import dayjs from 'dayjs';

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
  const { weather, main, name } = item;
  return (
    <LinearGradient
      colors={gradients?.[weather[0].main.toLowerCase()] || gradients.default}
      start={{ x: 0, y: 1 }}
      end={{ y: 0, x: 1 }}
      style={{
        width: '90%',
        alignSelf: 'center',
        borderRadius: 18,
      }}>
      <StyledView onPress={onPress}>
        <StyledCol>
          <Text fontSize={'26px'} bold>
            {name}
          </Text>
          <Text fontSize={'14px'}>{dayjs().format('dddd DD, MMMM')}</Text>
          <Text fontSize={'10px'}>{dayjs().format('H.mm a')}</Text>
        </StyledCol>
        <StyledCol>
          <WeatherIcon icon={weather[0].icon} />
        </StyledCol>
        <StyledCol>
          <Text fontSize={'42px'} bold center>
            {Math.round(main.temp)}°
          </Text>
        </StyledCol>
      </StyledView>
    </LinearGradient>
  );
};

export default HCard;
