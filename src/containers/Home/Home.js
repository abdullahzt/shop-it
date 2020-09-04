import React, { Fragment, useEffect } from 'react';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import ImageLoading from '../../components/UI/CustomLoading/ImageLoading'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import axios from '../../axios-main';

const Home = props => {

    const {imageLinks, fetchHomeImages} = props;

    useEffect(() => {
        fetchHomeImages()
    }, [fetchHomeImages])

    return (
        <Fragment>
            {imageLinks ? <ImageSlider links={imageLinks}/> : <ImageLoading />}
            <FeaturedProducts/>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        imageLinks: state.home.imageLinks,
        error: state.home.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHomeImages: () => dispatch(
            actions.fetchHomeImages()
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));