import React, { Fragment, useState } from 'react';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(true);
    }

    return (
        <Fragment>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <Toolbar opened={sideDrawerOpenHandler} />
        </Fragment>
    )

}

export default Layout;