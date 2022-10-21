import styled from 'styled-components/native';
import { View } from 'react-native';
import { colors } from '../../../theme';

const StyledText = styled.Text`
  color: palevioletred;
  font-family: open-sans;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ primary }) => (primary ? colors.primary : '#fff')};
  font-weight: ${({ bold }) => (bold ? '700' : 'regular')};
`;

const Text = ({ primary, center, fontSize, bold, children }) => {
  return (
    <View>
      <StyledText
        primary={primary}
        center={center}
        fontSize={fontSize}
        bold={bold}>
        {children}
      </StyledText>
    </View>
  );
};

export default Text;
