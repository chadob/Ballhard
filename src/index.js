import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { Switch } from 'react-router'; // react-router v4
import { Router, Route } from 'react-router-dom';
import { store, persistor, history } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={<div> hi</div>} persistor={persistor}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </PersistGate>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
