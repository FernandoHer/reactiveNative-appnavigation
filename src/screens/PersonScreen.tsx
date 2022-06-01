/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../themes/AppThemes';

// interface RouterParams {
//     id:string,
//     name:string,
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}

export const PersonScreen = ({route, navigation}:Props) => {
    // const params = route.params as RouterParams;
    const params = route.params;
    useEffect( () =>{
        navigation.setOptions({
            title: params.name,
        });
    },[]);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> {
            JSON.stringify(params, null, 3)
        } </Text>
    </View>
  );
};
