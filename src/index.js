import React from 'react';
import { StatusBar } from 'react-native';
import { colors } from '@/constants';
import Navigation from './navigation/StackNavigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent animated backgroundColor={colors.midWhite(0)} />
      <Navigation />
    </>
  );
}
