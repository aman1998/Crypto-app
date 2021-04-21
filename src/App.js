import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';

import './assets/styles/index.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
