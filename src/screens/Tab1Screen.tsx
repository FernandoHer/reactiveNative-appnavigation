/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/AppThemes';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <TouchableIcon iconName="airplane-sharp" />
          <TouchableIcon iconName="airplane-outline" />
          <TouchableIcon iconName="attach-outline"  />
          <TouchableIcon iconName="bonfire-outline"  />
          <TouchableIcon iconName="calculator-outline"  />
          <TouchableIcon iconName="chatbubble-outline"  />
        </Text>
    </View>
  );
};
