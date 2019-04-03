import {
  LOGIN_WITH_FACEBOOK_INIT,
  LOGIN_WITH_FACEBOOK_ERROR,
  LOGIN_WITH_FACEBOOK_SUCCESS,

  FACEBOOK_GRAPH_REQ_INIT,
  FACEBOOK_GRAPH_REQ_ERROR,
  FACEBOOK_GRAPH_REQ_SUCCESS,

  GET_USER_TOKEN_INIT,
  GET_USER_TOKEN_ERROR,
  GET_USER_TOKEN_SUCCESS,

} from '../Utils/Constants'

const initialState = {
  isLoading : false,
  facebookError : '',
  fbGrantedPermission : '',
  facebookGraphData : {}
}

export default Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_FACEBOOK_INIT:
      return Object.assign({}, state, {isLoading:true});
    case LOGIN_WITH_FACEBOOK_ERROR:
      return Object.assign({}, state, {isLoading:false, facebookError: action.payload});
    case LOGIN_WITH_FACEBOOK_SUCCESS:
      return Object.assign({}, state, {isLoading:false, facebookError:'', fbGrantedPermission: action.payload});
    case FACEBOOK_GRAPH_REQ_INIT:
      return Object.assign({}, state, {isLoading:true});
    case FACEBOOK_GRAPH_REQ_ERROR:
      return Object.assign({}, state, {isLoading:false, facebookError: action.payload});
    case FACEBOOK_GRAPH_REQ_SUCCESS:
      return Object.assign({}, state, {isLoading:false, facebookGraphData: action.payload});
    default:
      return state
  }
}