import React from 'react';
import { Text } from '../../atoms';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../../../theme';

const { height } = Dimensions.get('window');

const StyledButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${height * 0.05}px 0;
`;

const AddCityBtn = () => {
  return (
    <StyledButton>
      <Icon
        name="plus-square"
        size={28}
        color={colors.primary}
        style={{ marginRight: 12 }}
      />
      <Text primary bold fontSize={'20px'}>
        Aggiungi città
      </Text>
    </StyledButton>
  );
};

export default AddCityBtn;
