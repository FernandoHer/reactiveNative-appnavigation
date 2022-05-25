/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/AppThemes';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top}}>
        <Text style={styles.title}>Pantalla de Ajustes</Text>
    </View>
  );
};
