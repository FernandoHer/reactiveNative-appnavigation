/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/AppThemes';

export const AlbumsSreen = () => {
  const { logout, authState } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Album Screen</Text>
        {
          authState.isLoggedIn &&
            <Button
              title="Logout"
              onPress={ logout }
            />
        }

    </View>
  );
};
