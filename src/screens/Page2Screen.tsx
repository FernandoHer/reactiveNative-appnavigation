/* eslint-disable prettier/prettier */

import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View} from 'react-native';
import { styles } from '../themes/AppThemes';



export const Page2Screen = ( ) => {

  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'return',
    });

  }, []);


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page2Screen</Text>
        <Button
          title="Ir a pagina 3"
          onPress={ () => navigator.navigate('Page3Screen')}
        />
    </View>
    );
};
