import React, { Fragment, useState } from 'react';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import MenuButton from '../components/Navigation/MenuButton/MenuButton'

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(currentState => !currentState);
    }

    return (
        <Fragment>
            <MenuButton isOpened={showSideDrawer} show={sideDrawerToggleHandler} /> 
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <Toolbar opened={sideDrawerToggleHandler} />
            {props.children}
        </Fragment>
    )

}

export default Layout;