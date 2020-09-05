import * as actionTypes from '../actions/actionTypes';

import axios from '../../axios-main';

export const setCategories = (categories) => {
    return { type: actionTypes.SET_CATEGORIES, data: categories }
}

export const fetchCategories = () => {
    return dispatch => {
        axios.get('/categories.json')
            .then(response => {
                let categories = []
                for (let key in response.data) {
                    categories.push({
                        key,
                        ...response.data[key]
                    })
                }
                dispatch(setCategories(categories))
            })
            .catch(err => {})
    }
}