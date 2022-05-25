/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
      {/* <MenuLateralBasico/> */}
    </NavigationContainer>
  );
};

export default App;
