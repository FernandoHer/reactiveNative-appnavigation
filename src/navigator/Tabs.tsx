/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/AppThemes';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
      ? <TabIOS/>
      : <TabAndroid/>;
    };


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled = {true}
      barStyle ={{ backgroundColor: colores.primary}}
      screenOptions = {({route}) => ({
        tabBarIcon:({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
                iconName = 'airplane-sharp';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
            break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
            break;
          }
          return  <Icon name={iconName} size={20} color={color} />
        }})
      }
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
          backgroundColor: 'white',
        }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
            fontSize: 15,
        },
        tabBarIcon: ({color}) => {
 
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-sharp';
            break;
          case 'TopTabNavigator':
            iconName = 'airplane-outline';
          break;
          case 'StackNavigator':
            iconName = 'arrow-redo';
          break;
          }
          return <Icon name={iconName} size={20} color={color} />;
      },
    })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
