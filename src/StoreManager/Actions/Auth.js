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

import AxiosClient from '../../AxiosClient/AxiosClient'

import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";

import NavigationService from '../../Navigation/NavigationService' 

import {AsyncStorage} from 'react-native'

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
                  //NavigationService.navigate('AuthLoading');
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

const loginWithEmail = () => (dispatch, getState) =>  {
  console.log('loginWithEmail');
}

const getUserDetails = () => (dispatch, getState) => {
  AxiosClient.get('api/user/profile/details')
  .then((result) => {
    console.log(result);
  })
}

export default {
  loginWithFacebook,
  loginWithEmail,
  getUserDetails
}