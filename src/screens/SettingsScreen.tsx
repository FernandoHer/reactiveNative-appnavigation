/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../themes/AppThemes';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);
  const { favoriteIcon } = authState;
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top}}>
        <Text style={styles.title}>Pantalla de Ajustes</Text>
        <Text> {JSON.stringify(authState, null, 4)} </Text>
        <Text>
          {
            favoriteIcon && (
              <Icon
                  name= {favoriteIcon}
                  size={150}
                  color={colores.primary}
            />)
          }
          
        </Text>
    </View>
  );
};
