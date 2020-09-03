import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
    <ul className={classes.NavigationItems} >
        <NavigationItem link={"/"}>Home</NavigationItem>
        <NavigationItem link={"/browse"}>Browse</NavigationItem>
        <div className={classes.DesktopOnly} >
            <NavigationItem link={"/auth"}>Login</NavigationItem>
        </div>
    </ul>
)

export default NavigationItems;