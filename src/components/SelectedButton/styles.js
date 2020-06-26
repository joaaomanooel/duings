import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/constants';

export const Button = styled(LinearGradient).attrs(() => ({
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
