import axios from 'axios'

import * as actionTypes from './actionTypes';
import APIKEY from '../../shared/APIKEY';

export const authStart = () => {
    return { type: actionTypes.AUTH_START }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {

        const authData = {
            email,
            password,
            returnSecureToken: true
        }
    }
}