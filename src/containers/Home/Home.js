import React, { Fragment, useEffect } from 'react';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import CustomLoading from '../../components/UI/CustomLoading/CustomLoading'

import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
// import axios from '../../axios';

const Home = props => {

    const {imageLinks, fetchHomeImages} = props;

    useEffect(() => {
        fetchHomeImages()
    }, [fetchHomeImages])

    return (
        <Fragment>
            {imageLinks ? <ImageSlider links={imageLinks}/> : <CustomLoading />}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        imageLinks: state.home.imageLinks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHomeImages: () => dispatch(
            actions.fetchHomeImages()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);