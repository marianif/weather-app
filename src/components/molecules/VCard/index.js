import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text, WeatherIcon } from '../../atoms';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const { width } = Dimensions.get('window');

const StyledView = styled.View`
  width: ${width * 0.36}px;
  height: 100%;
  margin-right: 10px;
  border-radius: 20px;
  padding-top: 15px;
  background-color: ${({ background }) => background};
  overflow: hidden;
`;

const VCard = ({ item }) => {
  const { detailsBg } = useSelector((state) => state.ui);

  return (
    <StyledView style={styles.shadow} background={detailsBg[2]}>
      <Text center bold fontSize={22}>
        {dayjs(item.dt * 1000).format('dddd')}
      </Text>
      <Text center bold fontSize={30}>
        {Math.round(item.temp.day)}°
      </Text>
      <WeatherIcon icon={item.weather[0].icon} />
    </StyledView>
  );
};

export default VCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
