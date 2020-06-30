import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Header = styled.View`
  background-color: ${colors.midWhite()};
  justify-content: space-between;
  margin-bottom: 20px;
  height: ${170 + layout.statusBarHeight}px;
  padding: 20px;
`;

export const HeaderTop = styled.SafeAreaView`
  margin: 15px 0;
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
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
  margin: 20px;
`;

export const SearchContainer = styled.View`
  background-color: ${colors.yellow()};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  height: 40px;
`;

export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: colors.black(0.5),
}))`
  color: ${colors.midWhite()};
  font-weight: bold;
  margin-left: 10px;
  font-size: 14px;
  flex: 1;
`;

export const Logo = styled.Image`
  height: 50px;
  width: 130px;
`;

export const LocationContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  height: 50px;
  flex: 1;
`;

export const Location = styled.Text`
  color: ${colors.black()};
  margin-right: 10px;
  font-weight: 600;
`;
