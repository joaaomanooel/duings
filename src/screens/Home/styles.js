import styled from 'styled-components/native';
import { colors } from '@/constants';

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
