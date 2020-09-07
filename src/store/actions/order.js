import * as actionTypes from './actionTypes';
import axios from '../../axios-main';

export const resetOrder = () => {
    return { type: actionTypes.ORDER_RESET }
}

const orderStart = () => {
    return { type: actionTypes.ORDER_START }
}

const orderSuccess = (orderData) => {
    return { type: actionTypes.ORDER_SUCCESS, orderData }
}

export const order = (orderData) => {
    return dispatch => {
        dispatch(orderStart())
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(orderSuccess(orderData))
            })
            .catch(error => {

            })
    }
}