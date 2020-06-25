import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" animated backgroundColor="#FAFAFA" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
