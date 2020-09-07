import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: null,
    loading: false,
    orderSuccess: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_START:
            return orderStart(state, action)
        case actionTypes.ORDER_SUCCESS:
            return orderSuccess(state, action)
        case actionTypes.ORDER_RESET:
            return orderReset(state, action)
        default:
            return state
    }
}

const orderReset = (state, action) => {
    return {
        ...state,
        loading: false,
        orderSuccess: false
    }
}

const orderStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const orderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        orderSuccess: true
    }
}

export default reducer;