import React, { useEffect } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/';

import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';
import Product from './containers/Product/Product';
import Auth from './containers/Auth/Auth';

const App = props => {

  const { checkAuthStatus } = props;

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]) 

  return (
    <Layout>
      <Switch>
      <Route path="/auth" exact component={Auth} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuthStatus: () => dispatch(
      actions.checkAuthState()
    )
  }
}

export default connect(null, mapDispatchToProps)(App);
