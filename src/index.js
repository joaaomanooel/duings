import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '@/constants';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" animated backgroundColor={colors.midWhite()} />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
