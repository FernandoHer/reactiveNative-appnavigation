/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/AppThemes';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { Tab1Screen } from '../screens/Tab1Screen';

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
                iconName = 'T1';
              break;
            case 'TopTabNavigator':
              iconName = 'T2';
            break;
            case 'StackNavigator':
              iconName = 'SN';
            break;
          }
          return <Text style={{color}}> {iconName} </Text>;
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
        tabBarIcon: (props) => {
 
          let iconName: string = '';
          switch (route.name) {
              case 'Tab1Screen' :
                  iconName = 'T1';
              break;

              case 'TopTabNavigator' :
                  iconName = 'T2';
              break;

              case 'StackNavigator' :
                  iconName = 'ST';
              break;
          }
          return <Text style={{color: props.color}}>{ iconName }</Text>;
      },
    })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
