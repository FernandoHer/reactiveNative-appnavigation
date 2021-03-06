/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View,TouchableOpacity } from 'react-native';
import { styles } from '../themes/AppThemes';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width > height) ? 'permanent' : 'front',
        headerShown: false,
      }}
      drawerContent= { (props) => <MenuInterno {...props}/> }
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}:DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/* Imagen del menu lateral */}
      <View style={styles.avatarContent}>
        <Image
          source={{
            uri: "https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif"
          }}
          style={styles.avatar}
        />
      </View>

      {/* Contenido del menu lateral */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row', marginLeft: 15}}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text>
            <Icon name="compass-outline" size={25} color="black" />
          </Text>
          <Text style={styles.menuTexto}>  Navegador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row', marginLeft: 15}}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text>
            <Icon name="settings-outline" size={25} color="black" />
          </Text>
          <Text style={styles.menuTexto}>  Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
