import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORIES:
            return setCategories(state, action)
        default:
            return state
    }
}

const setCategories = (state, action) => {
    return {
        categories: action.data
    }
}

export default reducer;