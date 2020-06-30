import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';

const Button = styled.TouchableOpacity.attrs({ hitSlop: layout.largeHitSlop, activeOpacity: 0.8 })`
  border-radius: ${layout.scale() * 20};
  width: ${layout.screenWidth * 0.85};
  margin: ${layout.scale() * 30}px;
  align-self: center;
  overflow: hidden;
`;

const Background = styled(LinearGradient).attrs(() => ({
  colors: [colors.lightYellow(), colors.yellow()],
  start: [1, 0.5],
}))`
  padding: ${layout.scale() * 10}px ${layout.scale() * 20}px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-size: ${layout.scale() * 16}px;
  color: ${colors.black(0.9)};
  font-weight: bold;
`;

export default React.memo(({ text = '', ...props }) => (
  <Button {...props}>
    <Background>
      <ButtonText style={props.textStyle}>{text}</ButtonText>
    </Background>
  </Button>
));
