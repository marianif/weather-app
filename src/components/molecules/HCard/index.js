import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Text, WeatherIcon } from '../../atoms';
import { OPENWEATHER_API_KEY } from '@env';
import { useEffect } from 'react';

const StyledContainer = styled.Pressable`
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
  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=turin&units=metric&appid=${OPENWEATHER_API_KEY}`,
      );

      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{
        width: '90%',
        alignSelf: 'center',
        borderRadius: 18,
      }}>
      <StyledContainer onPress={onPress}>
        <StyledCol>
          <Text fontSize={'26px'} bold>
            {item.cityName}
          </Text>
          <Text fontSize={'14px'}>{item.currentDate}</Text>
          <Text fontSize={'10px'}>{item.currentTime}</Text>
        </StyledCol>
        <StyledCol>
          <WeatherIcon />
        </StyledCol>
        <StyledCol>
          <Text fontSize={'42px'} bold center>
            22°
          </Text>
        </StyledCol>
      </StyledContainer>
    </LinearGradient>
  );
};

export default HCard;
