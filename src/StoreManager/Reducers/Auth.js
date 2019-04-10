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

  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,

  USER_REGISTRATION_INIT,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  REMOVE_REGISTRATION_ERROR,

  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  REMOVE_LOGIN_ERROR,

  REQ_USER_PASS_ERROR,
  REMOVE_REQ_USER_PASS_ERROR,
  REQ_USER_PASS_SUCCESS,

  CHANGE_USER_PASS_ERROR

} from '../Utils/Constants'

const initialState = {
  isLoading : false,
  facebookError : '',
  fbGrantedPermission : '',
  facebookGraphData : {},
  userDetails: {
    user : {
      first_name: '',
      last_name: '',
      email: ''
    }
  },
  userRegistrationError : {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  },
  userLoginError: {
    email: '',
    password: ''
  },
  reqUserPassError: {
    email: '',
    code: '',
    password: '',
    password_again: ''
  },
  showPasswordResetScreen : false
}

export default Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_FACEBOOK_INIT:
      return Object.assign({}, state, {isLoading:true});envelope-o
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
    case GET_USER_DETAILS_ERROR:
      return Object.assign({}, state, {isLoading:false});
    case GET_USER_DETAILS_SUCCESS:
      return Object.assign({}, state, {isLoading:false, userDetails: action.payload});
    case USER_REGISTRATION_ERROR:
      return Object.assign({}, state, {isLoading:false, userRegistrationError: action.payload});
    case REMOVE_REGISTRATION_ERROR:
      return Object.assign({}, state, {isLoading:false, userRegistrationError: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }});
    case USER_LOGIN_ERROR:
      return Object.assign({}, state, {isLoading:false, userLoginError: action.payload});
    case REMOVE_LOGIN_ERROR:
      return Object.assign({}, state, {isLoading:false, userLoginError: {
        email: '',
        password: ''
      }});
    case REQ_USER_PASS_ERROR:
      return Object.assign({}, state, {isLoading:false, reqUserPassError: action.payload});
    case REMOVE_REQ_USER_PASS_ERROR:
      return Object.assign({}, state, {isLoading:false, reqUserPassError: {
        email: '',
        code: '',
        password: '',
        password_again: ''
      }});
    case REQ_USER_PASS_SUCCESS:  
      return Object.assign({}, state, {isLoading:false, showPasswordResetScreen: true});

    case CHANGE_USER_PASS_ERROR:
      return Object.assign({}, state, {isLoading:false, reqUserPassError: action.payload});
    default:
      return state
  }
}

