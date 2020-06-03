import React from 'react';

import { BrowserRouter } from 'react-router-dom';


import Routes from '../../routes';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <div className="app"  data-testid="app">
        <Routes/>
    </div>
  </BrowserRouter>
  
);

export default App;
