/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  argumentos:{
    marginVertical: 20,
    fontSize:20,
    marginLeft:5,
  },
  botonGrande: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 10,
  },
  botonText:{
    fontSize: 18,
    color: 'white',
  },
  avatarContent:{
    alignItems:'center',
    marginTop: 8,
  },
  avatar:{
    width:150,
    height:150,
    borderRadius:100,
  },
  menuContainer:{
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuBoton:{
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTexto:{
    fontSize: 25,
  },
});
