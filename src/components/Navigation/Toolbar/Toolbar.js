import React from 'react';
import classes from './Toolbar.module.css';
import {Link} from 'react-router-dom';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import MenuButton from '../MenuButton/MenuButton';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <MenuButton show={props.opened} /> 
        <div className={classes.Logo} >
            <Link to="/">
                <Logo />
            </Link>
        </div>
        <nav className={classes.DesktopOnly} >
            <NavigationItems />
        </nav>
        <div className={classes.MobileOnly}>
            <div className={classes.Logout}>
                <NavigationItem link={"/auth"}>Login</NavigationItem>
            </div>
        </div>
    </header>
)

export default Toolbar;