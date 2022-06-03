/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/AppThemes';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  const { signIn, authState } = useContext(AuthContext);

  const { isLoggedIn } = authState;

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Contact Screen </Text>

        {
          !isLoggedIn && <Button title="SignIn" onPress={ signIn }/>
        }

    </View>
  );
};
