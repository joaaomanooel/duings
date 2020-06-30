import { colors } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Button = styled(LinearGradient).attrs(() => ({
  colors: [colors.lightYellow(), colors.yellow()],
  start: [1, 0.2],
}))`
  border-color: ${colors.lightWhite()};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border-width: 5px;
  margin-top: -10px;
  height: 50px;
  width: 50px;
`;

export default React.memo(({ onPress, name, lib: Icon }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button><Icon name={name} size={24} color={colors.black(0.9)} /></Button>
    </TouchableWithoutFeedback>
  );
});
