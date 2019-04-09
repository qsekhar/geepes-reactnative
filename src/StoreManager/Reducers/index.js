import { combineReducers } from 'redux'
import Auth from './Auth'
import Global from './Global'
import Geolocation from './Geolocation'
import PostCards from './PostCards'
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  Auth,
  Global,
  Geolocation,
  PostCards,
  network
})