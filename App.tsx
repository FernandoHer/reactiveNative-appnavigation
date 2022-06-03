/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AutProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
         {/* <Tabs/> */}
        <MenuLateral/>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBasico/> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any ) =>{
  return (
    <AutProvider>
      {children}
    </AutProvider>
  );
};

export default App;
