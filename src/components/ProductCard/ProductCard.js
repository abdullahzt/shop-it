import React from 'react';
import classes from './ProductCard.module.css'

import Button from '../UI/Button/Button';

const productCard = props => {

    return (
        <div className={classes.ProductCard}>
            <img src={props.data.imageURL} alt=""/>
            <h2>{props.data.name}</h2>
            { props.showSubData &&
            (<><h3>Price: PKR {props.data.price}</h3>
            <h3>{props.data.inStock ? "In Stock" : "Out of Stock"}</h3>
            <Button>Buy Now</Button></>)}
        </div>
    )
}

export default productCard;