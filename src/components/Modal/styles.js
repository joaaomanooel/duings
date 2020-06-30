import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Background = styled.View`
  width: ${layout.screenWidth}px;
  height: ${layout.screenHeight}px;
  background-color: ${colors.black(0.5)};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.View`
  width: ${layout.screenWidth * 0.8}px;
  background-color: ${colors.white()};
  border-radius: 20px;
  padding: 20px;
  ${layout.shadow}
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.black()};
   font-weight: bold;
  font-size: 24px;
`;

export const Body = styled.View``;
