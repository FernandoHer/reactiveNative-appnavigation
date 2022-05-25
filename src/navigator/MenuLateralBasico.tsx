/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width > height) ? 'permanent' : 'front',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title: 'home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
