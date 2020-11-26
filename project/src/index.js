import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import App from './CommonComponent/App';


ReactDOM.render(
  // <Provider store={store}>
      <BrowserRouter>
          <Switch>
              <App/>
          </Switch>
      </BrowserRouter>,
      // </Provider>,
  document.getElementById('root')
);

export default App;