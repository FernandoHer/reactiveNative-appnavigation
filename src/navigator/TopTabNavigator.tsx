/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsSreen } from '../screens/AlbumsSreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/AppThemes';
import { Text } from 'react-native';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
        style = {{paddingTop: top}}
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={ ({route}) =>( {
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle:{
                borderTopWidth: 0,
                shadowColor: 'transparent',
                elevation: 0,
            },
            tabBarIcon:({color}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'CH';
                        break;
                    case 'ContactScreen':
                        iconName = 'CS';
                        break;
                    case 'AlbumsSreen':
                        iconName = 'AS';
                        break;

                }
                return <Text style= {{color}}> {iconName}</Text>;
            },
        })}

    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsSreen" component={AlbumsSreen} />
    </Tab.Navigator>
  );
};
