import { combineReducers } from 'redux'
import banner from './banner'
import data from './data'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  banner,
  data,
  router: connectRouter(history)
})
