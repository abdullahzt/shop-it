import React from 'react';

import classes from './ProductContainer.module.css';

import Button from '../UI/Button/Button';

const productContainer = props => {
    return (
        <div className={classes.ProductContainer} >
            <div className={classes.ProductData} >
                <h1>{props.product.name}</h1>
                <h2>Price: PKR {props.product.price}</h2>
                <h2>{props.product.inStock ? "In Stock" : "Out of Stock"}</h2>
                <Button disabled={!props.product.inStock} >Add To Cart</Button>
            </div>
            <div className={classes.ProductImage} >
                <img src={props.product.imageURL} alt=""/>
            </div>
        </div>
    )
}

export default productContainer;