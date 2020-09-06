import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userID: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
        default:
            return state
    }
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

export default reducer;