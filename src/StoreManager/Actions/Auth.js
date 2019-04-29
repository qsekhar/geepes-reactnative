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

  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,

  REQ_USER_PASS_INIT,
  REQ_USER_PASS_SUCCESS,
  REQ_USER_PASS_ERROR,

  CHANGE_USER_PASS_INIT,
  CHANGE_USER_PASS_SUCCESS,
  CHANGE_USER_PASS_ERROR,

  GET_NEW_MSG_INFO

} from '../Utils/Constants'

import AxiosClient from '../../AxiosClient/AxiosClient'

import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";

import NavigationService from '../../Navigation/NavigationService' 

import AsyncStorage from '@react-native-community/async-storage';

const loginWithFacebook = () => (dispatch, getState) =>  {
  dispatch({type: LOGIN_WITH_FACEBOOK_INIT});
  LoginManager.logInWithReadPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        dispatch({type: LOGIN_WITH_FACEBOOK_ERROR, payload: 'Login cancelled'});
      } else {
        dispatch({type: LOGIN_WITH_FACEBOOK_SUCCESS, payload: "Login success with permissions: " +
        result.grantedPermissions.toString()});

        dispatch({type: FACEBOOK_GRAPH_REQ_INIT});

        _responseInfoCallback = (error, result) => {
          if (error) {
            dispatch({type: FACEBOOK_GRAPH_REQ_ERROR, payload: 'Error fetching data: ' + error.toString()});
          } else {
            dispatch({type: FACEBOOK_GRAPH_REQ_SUCCESS, payload: result});

            var formData = new FormData();

            formData.append('email', result.email);
            formData.append('first_name', result.first_name);
            formData.append('middle_name', result.middle_name);
            formData.append('last_name', result.last_name);
            formData.append('fb_id', result.id);
            formData.append('picture', result.picture.data.url);

            dispatch({type: GET_USER_TOKEN_INIT, payload:formData});
            AxiosClient.post('user/fbset/', formData)
              .then(function (response) {
                dispatch({type: GET_USER_TOKEN_SUCCESS, payload: response.data.user});

                AsyncStorage.setItem('auth_token', response.data.user.auth_token)
                .then(() => {
                  NavigationService.navigate('AuthLoading');
                })
                
              })
              .catch((error) => {
                dispatch({type: GET_USER_TOKEN_ERROR, payload: "Can't get token"});
              })
            }
        }

        const infoRequest = new GraphRequest(
          '/me?fields=first_name,middle_name,last_name,email,picture',
          null,
          this._responseInfoCallback,
        );
        
        new GraphRequestManager().addRequest(infoRequest).start();
      }
    },
    function(error) {
      dispatch({type: LOGIN_WITH_FACEBOOK_ERROR, payload: "Login fail with error: " + error});
    }
  );
}


const getUserDetails = () => (dispatch, getState) => {
  AxiosClient.get('api/user/profile/details')
  .then((result) => {
    if(typeof result.data.user != 'undefined') {
      dispatch({type: GET_USER_DETAILS_SUCCESS, payload: result.data});
        AxiosClient.get('api/user/postcard/inbox/new/count').then((result) => {
          if(typeof result.data.inboxcount != 'undefined'){
            dispatch({type: GET_NEW_MSG_INFO, payload: result.data.inboxcount});
          }
        })
    } else {
      dispatch({type: GET_USER_DETAILS_ERROR, payload: "Please login again"});
    }
  }).catch((error) => {
    dispatch({type: GET_USER_DETAILS_ERROR, payload: "Can't get User Details"});
  })
}

const registerWithEmail = (params) => (dispatch, getState) => {

  var formData = new FormData();
  formData.append('email', params.email);
  formData.append('first_name', params.first_name);
  formData.append('last_name', params.last_name);
  formData.append('password', params.password);

  dispatch({type: USER_REGISTRATION_INIT, payload:formData});
  AxiosClient.post('user/set/', formData)
    .then(function (response) {

      if(response.data){
        dispatch({type: USER_REGISTRATION_SUCCESS, payload: response.data.user});

        AsyncStorage.setItem('auth_token', response.data.user.auth_token)
        .then(() => {
          NavigationService.navigate('AuthLoading');
        })
      } else {
        dispatch({type: USER_REGISTRATION_ERROR, payload: response.error});
      }
    })
    .catch((error) => {
      dispatch({type: USER_REGISTRATION_ERROR, payload: error.response.data.error});
    })
}


const loginWithEmail = (params) => (dispatch, getState) => {

  var formData = new FormData();
  formData.append('email', params.email);
  formData.append('password', params.password);

  dispatch({type: USER_LOGIN_INIT, payload:formData});
  AxiosClient.post('user/auth/', formData)
    .then(function (response) {

      if(response.data){
        dispatch({type: USER_LOGIN_SUCCESS, payload: response.data.user});

        AsyncStorage.setItem('auth_token', response.data.user.auth_token)
        .then(() => {
          NavigationService.navigate('AuthLoading');
        })
      } else {
        dispatch({type: USER_LOGIN_ERROR, payload: response.error});
      }
    })
    .catch((error) => {
      dispatch({type: USER_LOGIN_ERROR, payload: error.response.data.error});
    })
}

const requestPasswordResetCode = (params) => (dispatch, getState) => {

  var formData = new FormData();
  formData.append('email', params.email);

  dispatch({type: REQ_USER_PASS_INIT, payload:formData});
  AxiosClient.post('user/password/request/', formData)
    .then(function (response) {

      if(response.data){
        dispatch({type: REQ_USER_PASS_SUCCESS, payload: response.data});
      } else {
        dispatch({type: REQ_USER_PASS_ERROR, payload: response.error.data.error});
      }
    })
    .catch((error) => {
      dispatch({type: REQ_USER_PASS_ERROR, payload:  error.response.data.error});
    })
}


const changePasswordWithCode = (params) => (dispatch, getState) => {

  var formData = new FormData();
  formData.append('email', params.email);
  formData.append('code', params.code);
  formData.append('password', params.password);
  formData.append('password_again', params.password_again);


  dispatch({type: CHANGE_USER_PASS_INIT, payload:formData});
  AxiosClient.post('user/password/change/', formData)
    .then(function (response) {
      if(response.data){
        dispatch({type: CHANGE_USER_PASS_SUCCESS, payload: response.data});
        NavigationService.navigate('Login');
      } else {
        dispatch({type: CHANGE_USER_PASS_ERROR, payload: response.error.data.error});
      }
    })
    .catch((error) => {
      dispatch({type: CHANGE_USER_PASS_ERROR, payload:  error.response.data.error});
    })
}

export default {
  loginWithFacebook,
  loginWithEmail,
  getUserDetails,
  registerWithEmail,
  requestPasswordResetCode,
  changePasswordWithCode
}