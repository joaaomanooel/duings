import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@/constants';

import { SelectedButton } from '@/components';

import HomeScreen from '@/screens/Home';
import ClendarScreen from '@/screens/Calendar';
import SettingScreen from '@/screens/Settings';

const Tab = createBottomTabNavigator();

const icons = {
  Home: { lib: AntDesign, name: 'home' },
  Calendar: { lib: AntDesign, name: 'calendar' },
  Settings: { lib: AntDesign, name: 'setting' },
};

export default () => {
  const handleScreenOptions = ({ route, navigation: { navigate } }) => ({
    tabBarIcon: ({ color, size, focused }) => {
      const { lib: Icon, name } = icons[route.name];

      if (focused) {
        return (
          <SelectedButton
            onPress={() => !focused && navigate(route.name)}
            name={name}
            lib={Icon}
          />
        );
      }

      return <Icon name={name} size={size} color={color} />;
    },
  });

  return (
    <Tab.Navigator
      screenOptions={handleScreenOptions}
      tabBarOptions={{
        style: { backgroundColor: colors.lightWhite(), borderTopColor: colors.lightWhite(0.2) },
        inactiveTintColor: colors.black(),
        activeTintColor: colors.black(),
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Calendar" component={ClendarScreen} options={{ title: 'Agenda' }} />
      <Tab.Screen name="Settings" component={SettingScreen} options={{ title: 'Ajustes' }} />
    </Tab.Navigator>
  );
};
