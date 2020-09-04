import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import classes from './ProductContainer.module.css';

const data = {
    name: "Macbook Air 2018",
    price: "160000",
    imageURL: "https://sm.mashable.com/t/mashable_pk/review/m/macbook-ai/macbook-air-2020-review-apple-gets-this-air-just-right_e1z9.960.jpg"
}

const productContainer = props => {
    return ( 
        <div className={classes.ProductContainer} >
            <ProductCard showSubData data={data} />
            <ProductCard showSubData data={data} />
            <ProductCard showSubData data={data} />
            <ProductCard showSubData data={data} />
            <ProductCard showSubData data={data} />
            <ProductCard showSubData data={data} />
        </div>
    )
}

export default productContainer;