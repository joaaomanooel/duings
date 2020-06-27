import styled from 'styled-components/native';
import { colors, layout } from '@/constants';

export const Header = styled.View`
  height: ${100 + layout.statusBarHeight}px;
  background-color: ${colors.midWhite()};
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
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
  color: ${colors.black()};
  font-weight: bold;
  font-size: 24px;
`;

export const SettingsContainer = styled.View`
  flex: 1;
`;

export const RowContainer = styled.View`
  border-bottom-color: ${colors.black(0.05)};
  justify-content: space-between;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
  padding: 20px 5px;
  margin: 10px 25px;
`;

export const Label = styled.Text`
  color: ${colors.black()};
  font-weight: 600;
  font-size: 16px;
`;
