import React from 'react';
import classes from './Button.module.css';

const button = props => (
    <button onClick={props.onClick} className={classes.Button} >{props.children}</button>
)

export default button;