/* eslint-disable react-native/no-inline-styles *//* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsSreen } from '../screens/AlbumsSreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/AppThemes';
import Icon from 'react-native-vector-icons/Ionicons';


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
                backgroundColor: colores.primary,
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
                        iconName = 'chatbox-ellipses-outline';
                      break;
                    case 'ContactScreen':
                      iconName = 'people-outline';
                    break;
                    case 'AlbumsSreen':
                      iconName = 'albums-outline';
                    break;

                }
                return <Icon name={iconName} size={20} color={color} />;
            },
        })}

    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsSreen" component={AlbumsSreen} />
    </Tab.Navigator>
  );
};
