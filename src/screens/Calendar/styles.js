import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Header = styled.View`
  background-color: ${colors.midWhite()};
  justify-content: center;
  margin-bottom: 20px;
  height: ${60 + layout.statusBarHeight}px;
  padding: 20px;
`;

export const Body = styled.ScrollView`
  background-color: ${colors.midWhite()};
  flex: 1;
`;

export const Container = styled.View`
  background-color: ${colors.darkWhite()};
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.yellow()};
  font-weight: bold;
  font-size: 24px;
`;

export const Cards = styled.View`
  margin-top: 25px;
  flex: 1;
`;
