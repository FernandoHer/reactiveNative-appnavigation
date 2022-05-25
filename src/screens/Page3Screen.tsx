/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/AppThemes';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin}>
        <Text style={styles.title}>Page3Screen</Text>
        <Button
          title="Regresar página 2"
          onPress={ () => navigation.pop() }
        />
        <Button
          title="Regresar página 1"
          onPress={ () => navigation.popToTop() }
        />
    </View>
    );
};
