import React from 'react';
import './App.css';
import Layout from './hoc/Layout';

import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
