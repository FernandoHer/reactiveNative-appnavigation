/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { colores, styles } from '../themes/AppThemes';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-sharp" size={30} color={colores.primary} />;
          <Icon name="airplane-outline" size={30} color={colores.primary} />;
          <Icon name="arrow-redo" size={30} color="#900" />;
        </Text>
    </View>
  );
};
