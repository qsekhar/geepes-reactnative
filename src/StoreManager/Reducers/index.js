import { combineReducers } from 'redux'
import Auth from './Auth'
import Global from './Global'
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  Auth,
  Global,
  network
})