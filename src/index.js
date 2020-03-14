import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styleSheets/index.css';
import './assets/styleSheets/App.css';

import App from './components/containerComponents/App';
import reducer from './reducers/index.js';
import Login from './components/containerComponents/Login';
import Logout from './components/containerComponents/Logout';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route
          path='/login'
          exact
          render={({ history }) => (<Login history={history} />)}>
        </Route>
        <Route
          path='/pizzapals'
          exact
          render={({ history }) => (<App history={history} />)}>
        </Route>
        <Route
          path='/logout'
          exact
          render={({ history }) => (<Logout history={history} />)}>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
