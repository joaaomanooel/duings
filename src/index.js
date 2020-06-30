import React from 'react';
import createStore from '@/redux';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigation from './navigation/StackNavigation';

const { store, persistor } = createStore();

export { store };

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent animated backgroundColor="transparent" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}
