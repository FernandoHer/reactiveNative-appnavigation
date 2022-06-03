/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../themes/AppThemes';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string,
}

export const TouchableIcon = ( { iconName }:Props ) => {
    const {changeFaviteIcon} = useContext(AuthContext);

  return (

    <TouchableOpacity
        onPress={() => changeFaviteIcon(iconName)}
    >
        <Text>
            <Icon name={ iconName } size={50} color={colores.primary} />
        </Text>
    </TouchableOpacity>
  );
};
