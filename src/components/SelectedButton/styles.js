import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient).attrs(() => ({
  colors: ['#FFED50', '#EEC548'],
  start: [1, 0.2],
}))`
  border-color: #FFF;
  border-width: 5px;
  margin-top: -10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;
