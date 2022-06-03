/* eslint-disable prettier/prettier */

import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';


// definir como luce o la informacion tendre aqui

export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}

// El estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Lo usaremois para decirle a react como luce el context
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void,
    logout: () => void,
    changeFaviteIcon: (iconName: string) => void,
    changeUsername: (nombre: string) => void,
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente que es proveedor del estado

export const AutProvider = ({children}:any ) =>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };

    const logout = () => {
        dispatch({ type: 'logout'});
    };

    const changeFaviteIcon = (iconName:string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName});
    };

    const changeUsername = (nombre:string) =>{
        dispatch({ type:'changeUsername', payload: nombre });
    };

    return (
        <AuthContext.Provider value= {{
            authState,
            signIn,
            logout,
            changeFaviteIcon,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
