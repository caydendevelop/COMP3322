import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './MyCPN/CommonComponent/App';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);