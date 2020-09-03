import * as actionTypes from '../actions/actionTypes';

const initialState = {
    imageLinks: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOME_IMAGES:
            return setHomeImages(action, state)
        default:
            return state
    }
}

const setHomeImages = (action, state) => {
    return {
        ...state,
        imageLinks: [
            ...action.data
        ]
    }
}

export default reducer;