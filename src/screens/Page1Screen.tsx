/* eslint-disable prettier/prettier */
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
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


  }, [])
  

  return (
    <View style= {styles.globalMargin}>
        <Text style={styles.title}>Page1Screen</Text>
        <Button
          title="Ir a página 2"
          onPress={ () => navigation.navigate('Page2Screen') }
        />

        <Text>Navegación con Argumentos</Text>
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
            <Text style={styles.botonText}>Mariela</Text>
          </TouchableOpacity>
        </View>
        

    </View>
    );
};
