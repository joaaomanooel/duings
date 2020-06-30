import { Button as ButtonCP } from '@/components';
import styled from 'styled-components/native';
import { colors, layout } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const headerHeight = 250;
const distanceHeacerToBody = 20;
const bodyHeight = layout.screenHeight - (headerHeight + distanceHeacerToBody);

export const Container = styled.View`
  background-color: ${colors.darkWhite()};
  flex: 1;
`;

export const Header = styled.ImageBackground`
  background-color: ${colors.yellow(0.8)};
  margin-bottom: ${distanceHeacerToBody}px;
  height: ${headerHeight}px;
  overflow: hidden;
  ${layout.shadow}
`;

export const HeaderTop = styled(LinearGradient).attrs(() => ({
  colors: [colors.black(0.05), colors.black(0.2)],
  start: [1, 0.1],
}))`
  flex-direction: row;
  min-height: 50px;
  padding: 20px;
`;

export const Body = styled.View`
  background-color: ${colors.midWhite()};
  min-height: ${bodyHeight}px;
  flex: 1;
  ${layout.shadow}
`;

export const Title = styled.Text`
  color: ${colors.black()};
  font-weight: bold;
  font-size: 24px;
`;

export const TitleContainer = styled.View`
  border-bottom-color: ${colors.black(0.05)};
  border-bottom-width: 1px;
  padding: 20px;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const DetailContainer = styled.View`
  margin: 25px;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const CurrencyIcon = styled(MaterialCommunityIcons).attrs(() => ({
  color: colors.yellow(),
  name: 'currency-usd',
  size: 14,
}))`
  border-color: ${colors.yellow()};
  text-align-vertical: center;
  border-radius: 12px;
  text-align: center;
  border-width: 2px;
  padding : 1px;
  height: 21px;
  width: 21px;
  margin: 1px;
 `;

export const DetailInfoText = styled.Text`
  color: ${colors.black()};
  padding: 0 10px;
  font-size: 14px;
`;

export const SubTitle = styled(Title)`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  color: ${colors.black()};
  font-size: 12px;
`;

export const DescriptionContainer = styled.View`
  margin: 0 25px;
  margin-bottom: 100px;
  flex: 1;
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
