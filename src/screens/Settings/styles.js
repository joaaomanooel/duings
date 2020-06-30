import styled from 'styled-components/native';
import { Button as ButtonCP } from '@/components';
import { colors, layout } from '@/constants';

const headerHeight = 100 + layout.statusBarHeight;
const distanceHeacerToBody = 20;
const bodyHeight = layout.screenHeight - (headerHeight + distanceHeacerToBody);

export const Header = styled.View`
  height: ${headerHeight}px;
  margin-bottom: ${distanceHeacerToBody}px;
  background-color: ${colors.midWhite()};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const Body = styled.ScrollView`
  background-color: ${colors.midWhite()};
  min-height: ${bodyHeight}px;
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

// Form Modal
export const Button = styled(ButtonCP)`
  height: 40px;
  width: 100%;
  margin: 0;
`;

export const FormContainer = styled.KeyboardAvoidingView`
  margin: 20px 5px;
`;

export const LoaderContainer = styled.View`
  background-color: ${colors.black(0.5)};
  height: ${layout.screenHeight * 1.1}px;
  width: ${layout.screenWidth}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  elevation: 6;
  z-index: 9;
  flex: 1;
`;
