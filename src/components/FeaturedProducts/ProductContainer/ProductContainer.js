import React from 'react';
import classes from './ProductContainer.module.css';

import ProductCard from '../../ProductCard/ProductCard';
import ImageLoading from '../../UI/CustomLoading/ImageLoading';

const productContainer = props => {

    let products = (<ImageLoading />)

    if (props.products) {
        products = props.products.map(product => <ProductCard key={product.key} showSubData data={product} />)
    }
    return ( 
        <div className={classes.ProductContainer} >
            {products}
        </div>
    )
}

export default productContainer;