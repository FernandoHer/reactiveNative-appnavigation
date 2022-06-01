/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../themes/AppThemes';


// interface Props extends StackScreenProps<any,any>{}
interface Props extends DrawerScreenProps<any,any>{}

export const Page1Screen = ({ navigation }:Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
        title='Menu'
        onPress={ () => navigation.toggleDrawer()}/>
      ),
    });
  }, []);


  return (
    <View style= {styles.globalMargin}>
        <Text style={styles.title}>Page1Screen</Text>
        <Button
          title="Ir a página 2"
          onPress={ () => navigation.navigate('Page2Screen') }
        />

        <Text style={styles.argumentos}>Navegación con Argumentos</Text>
        <View style={{
          flexDirection: 'row',
        }}>
          <TouchableOpacity 
                style= {{
                  ...styles.botonGrande,
                    backgroundColor:'#FF9427'}}
                onPress={ () => navigation.navigate('PersonScreen', {
                  id: '593',
                  name: 'Fernando',
                })}
          >
            <Text>
              <Icon name="man-outline" size={25} color="white" />
            </Text>
            <Text style={styles.botonText}>Fernando</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style= {{
                  ...styles.botonGrande,
                  backgroundColor:'#5658D6'}}
                onPress={ () => navigation.navigate('PersonScreen', {
                  id: '789',
                  name: 'Mariela',
                })}
          >
            <Text>
              <Icon name="woman-outline" size={25} color="white" />
            </Text>
            <Text style={styles.botonText}>Mariela</Text>
          </TouchableOpacity>
        </View>

    </View>
    );
};
