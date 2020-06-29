import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';

const Button = styled.TouchableOpacity.attrs({ hitSlop: layout.largeHitSlop, activeOpacity: 0.7 })`
  border-radius: ${layout.scale() * 20};
  width: ${layout.screenWidth * 0.85};
  margin: ${layout.scale() * 30}px;
  align-self: center;
  overflow: hidden;
  ${layout.shadow}
`;

const Background = styled(LinearGradient).attrs(() => ({
  colors: [colors.lightYellow(), colors.yellow()],
  start: [1, 0.2],
}))`
  padding: ${layout.scale() * 15}px ${layout.scale() * 20}px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonText = styled.Text`
  font-size: ${layout.scale() * 16}px;
  color: ${colors.white()};
  font-weight: bold;
`;

export default React.memo(({ text = '', ...props }) => (
  <Button {...props}>
    <Background>
      <ButtonText style={props.textStyle}>{text}</ButtonText>
    </Background>
  </Button>
));
