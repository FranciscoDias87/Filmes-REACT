import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './component/Header';
import Erro from './pages/Erro';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={Erro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

