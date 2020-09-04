import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-main';

export const setHomeImages = (imagesData) => {
    return { type: actionTypes.SET_HOME_IMAGES, data: imagesData }
}

export const fetchHomeImages = () => {
    return dispatch => {
        axios.get('/featured.json')
            .then(response => {
                let imageLinks = []
                for (let key in response.data) {
                    imageLinks.push({
                        key,
                        url: response.data[key].url
                    })
                }
                dispatch(setHomeImages(imageLinks))
            })
            .catch(err => {})
    }
}