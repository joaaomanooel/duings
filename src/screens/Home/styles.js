import styled from 'styled-components/native';

// STRUCTURE

export const Header = styled.SafeAreaView`
  height: 150px;
  background-color: #F8F8F8;
  margin-bottom: 20px;
`;

export const Body = styled.ScrollView`
  flex: 1;
  background-color: #F8F8F8;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #E9E9E9;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 25px;
`;

// CARDS

export const Card = styled.ImageBackground.attrs(() => ({ imageStyle: { borderRadius: 20 } }))`
  margin: 0px 25px;
  margin-bottom: 25px;
  min-height: 200px;
  padding-bottom: 100px;
  border-radius: 20px;
  background-color: #FFD393;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  elevation: 5;
`;

export const CardHeader = styled.View`
  background-color: rgba(0,0,0, 0.3);
  min-height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px;
`;

export const CartTitle = styled.Text`
  color: #FAFAFA;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Discount = styled.Text`
  margin-top: 10px;
  color: #FAFAFA;
  font-size: 14px;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;
