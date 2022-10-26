import { Dimensions, View } from 'react-native';
import React from 'react';
import { Text } from '../../atoms';
import styled from 'styled-components/native';

const StyledView = styled.View`
  margin: 0 auto;
  align-items: center;
`;

const Greetings = ({ user }) => {
  return (
    <StyledView>
      <Text primary bold fontSize={30}>
        Good Morning!
      </Text>
      <Text primary bold fontSize={30}>
        {user}
      </Text>
    </StyledView>
  );
};

export default Greetings;
