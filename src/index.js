import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from "./store";

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
