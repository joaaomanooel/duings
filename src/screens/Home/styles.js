import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';

// STRUCTURE

export const Header = styled.SafeAreaView`
  background-color: ${colors.midWhite()};
  margin-bottom: 20px;
  height: 150px;
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
  color: ${colors.black()};
  font-weight: bold;
  font-size: 18px;
  margin: 25px;
`;

// CARDS

export const Card = styled.ImageBackground.attrs(() => ({ imageStyle: { borderRadius: 20 } }))`
  ${layout.shadow}
  margin: 0px 25px;
  margin-bottom: 25px;
  padding-bottom: 100px;
  background-color: ${colors.yellow(0.8)};
  border-radius: 20px;
  min-height: 200px;
  overflow: hidden;
`;

export const CardHeader = styled(LinearGradient).attrs(() => ({
  colors: [colors.black(0.3), colors.black(0.05)],
  start: [1, 0.2],
}))`
  background-color: ${colors.black(0.3)};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  min-height: 80px;
  padding: 20px;
`;

export const CartTitle = styled.Text`
  text-shadow: 0px 4px 10px ${colors.black(0.25)};
  color: ${colors.white()};
  font-weight: bold;
  font-size: 20px;
`;

export const Discount = styled.Text`
  text-shadow: 0px 4px 10px ${colors.black(0.25)};
  color: ${colors.white()};
  margin-top: 10px;
  font-size: 14px;
`;
