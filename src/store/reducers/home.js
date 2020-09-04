import * as actionTypes from '../actions/actionTypes';

const initialState = {
    imageLinks: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOME_IMAGES:
            return setHomeImages(state, action)
        default:
            return state
    }
}

const setHomeImages = (state, action) => {
    return {
        ...state,
        imageLinks: [
            ...action.data
        ]
    }
}


export default reducer;