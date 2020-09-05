import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProductContainer from '../../components/ProductContainer/ProductContainer';
import ImageLoading from '../../components/UI/CustomLoading/ImageLoading';

import * as actions from '../../store/actions/';

const Product = props => {

    const productID = props.match.params.id;

    const { fetchProduct, product } = props;

    useEffect(() => {
        fetchProduct(productID);
    }, [fetchProduct, productID])

    let renderProduct = <ProductContainer product={product} />

    if (!product || props.loading) {
        renderProduct = <ImageLoading />
    }

    return (
        <>
        {renderProduct}
        </>
    )

}

const mapStateToProps = state => {
    return {
        product: state.product.product,
        loading: state.product.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (id) => dispatch(
            actions.fetchProduct(id)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);