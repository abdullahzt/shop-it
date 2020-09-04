import React from 'react';
import classes from './FeaturedProducts.module.css'

import ProductContainer from './ProductContainer/ProductContainer'

const FeaturedProducts = props => {

    return (
        <div className={classes.FeaturedProducts} >
            <h1>Featured Products</h1>
            <ProductContainer/>
        </div>
    )
}

export default FeaturedProducts;