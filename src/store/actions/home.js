import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const setHomeImages = (imagesData) => {
    return { type: actionTypes.SET_HOME_IMAGES, data: imagesData }
}

export const fetchHomeImages = () => {
    return dispatch => {
        axios.get('/featured.json')
            .then(response => response.data)
            .then(data => {
                let imageLinks = []
                for (let key in data) {
                    imageLinks.push({
                        key,
                        url: data[key].url
                    })
                }
                dispatch(setHomeImages(imageLinks))
            })
    }
}