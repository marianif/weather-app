import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text, WeatherIcon } from '../../atoms';
import { gradients } from '../../../theme';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const StyledView = styled.View`
  width: ${width * 0.36}px;
  height: 95%;
  margin-right: 10px;
  border-radius: 20px;
  padding-top: 15px;
  background-color: ${({ background }) => background};
  overflow: hidden;
`;

const VCard = ({ item }) => {
  const { detailsCardBg } = useSelector(state => state.ui);
  return (
    <StyledView style={styles.shadow} background={detailsCardBg}>
      <Text center bold fontSize={'22px'}>
        {item.day}
      </Text>
      <Text center bold fontSize={'36px'}>
        {item.temp}
      </Text>
      <WeatherIcon />
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
