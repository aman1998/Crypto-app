import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignPage from './pages/SignPage';

import './assets/styles/index.scss'

function App() {
  return (
    <BrowserRouter basename='/Crypto-app'>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/sign' component={SignPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
