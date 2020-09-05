import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';

import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Browse from './containers/Browse/Browse';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/browse" exact component={Browse} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
