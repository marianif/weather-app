import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { TabIcon } from '../../atoms';

const StyledContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  ${({ focused }) =>
    focused &&
    `css  
  width: 55%;
  border-bottom-width: 2px;
  border-color: ${colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center`};
`;

const TabBarIcon = ({ focused, name }) => {
  return (
    <StyledContainer focused={focused}>
      <TabIcon name={name} focused={focused} />
    </StyledContainer>
  );
};

export default TabBarIcon;
