import { combineReducers } from 'redux'
import banner from './banner'
import data from './data'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  banner,
  data,
  router: routerReducer
})
