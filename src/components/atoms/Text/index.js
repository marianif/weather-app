import styled from 'styled-components/native';
import { colors } from '../../../theme';

const StyledText = styled.Text`
  font-family: open-sans;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  color: ${({ primary }) => (primary ? colors.primary : '#fff')};
  font-weight: ${({ bold }) => (bold ? '700' : 'regular')};
`;

const Text = ({ primary, center, fontSize, bold, children }) => {
  return (
    <StyledText
      primary={primary}
      center={center}
      fontSize={fontSize}
      bold={bold}>
      {children}
    </StyledText>
  );
};

export default Text;
