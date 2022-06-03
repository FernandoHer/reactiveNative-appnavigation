/* eslint-disable prettier/prettier */

import { AuthState } from './AuthContext';

type AuthAction =
    |{ type: 'signIn' }
    |{ type: 'logout' }
    |{ type: 'changeFavIcon', payload: string }
    |{ type: 'changeUsername', payload: string }


export const authReducer = (state: AuthState, action: AuthAction):AuthState =>{

    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn:true,
                username: 'no-username-yet',
            };
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'logout':
            return {
                ...state,
                favoriteIcon: undefined,
                isLoggedIn: false,
                username: undefined,
            };
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
                isLoggedIn: true,
            };
        default:
            return state;
    }
};
