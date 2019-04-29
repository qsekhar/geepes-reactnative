import { combineReducers } from 'redux'
import Auth from './Auth'
import Global from './Global'
import Geolocation from './Geolocation'
import PostCards from './PostCards'
import HomeUpperTabs from './HomeUpperTabs'
import WriteGeepes from './WriteGeepes'
import Mail from './Mail'
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  Auth,
  Global,
  Geolocation,
  PostCards,
  HomeUpperTabs,
  WriteGeepes,
  Mail,
  network
})