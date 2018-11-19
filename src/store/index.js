import reducer from "../reducers";
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'

export const history = createBrowserHistory()

export const store = createStore(reducer(history), applyMiddleware(routerMiddleware(history), thunkMiddleware));
