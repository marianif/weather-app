import { Dimensions, View } from 'react-native';
import React from 'react';
import { Text } from '../../atoms';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

const StyledContainer = styled.View`
  height: ${height * 0.1}px;
  margin: 0 auto;
  align-items: center;
`;

const Greetings = ({ user }) => {
  return (
    <StyledContainer>
      <Text primary bold fontSize={'30px'}>
        Good Morning!
      </Text>
      <Text primary bold fontSize={'30px'}>
        {user}
      </Text>
    </StyledContainer>
  );
};

export default Greetings;