import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedView from '../AnimatedView';

export const AnimatableContainer = styled(AnimatedView)`
  align-self: center;
  border-radius: 10px;
  overflow: hidden;
  ${layout.shadow}
`;

export const Container = styled.TouchableOpacity.attrs(() => ({
  hitSlop: layout.hitSlop,
  activeOpacity: 0.7,
}))`
  padding: ${layout.scale() * 20}px;
  background-color: ${colors.white()};
  width: ${layout.screenWidth * 0.9}px;
  height: ${layout.scale() * 100}px;
  flex-direction: row;
  align-self: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const DateContainer = styled.View`
  border-right-width: ${layout.scale() * 3}px;
  border-right-color: ${colors.black()};
  padding-right: ${layout.scale() * 20}px;
  justify-content: center;
  align-items: center;
`;

export const DateBigText = styled.Text`
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 24)}px;
  color: ${colors.black()};
  font-weight: 900;
`;

export const RightView = styled.View`
  padding-left: ${layout.scale() * 20}px;
  justify-content: space-between;
  flex:1;
`;

export const Title = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 16)}px;
  color: ${colors.black()};
  font-weight: 800;
`;

export const BottomView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({ contentSize }) => ({
  size: contentSize * layout.scale() * 20,
  color: colors.yellow(),
}))``;

export const BottomText = styled.Text.attrs({ ellipsizeMode: 'tail', numberOfLines: 1 })`
  font-size: ${({ contentSize }) => contentSize * (layout.scale() * 14)}px;
  padding: ${layout.scale() * 5}px;
  color: ${colors.black()};
  font-weight: 400;
`;
