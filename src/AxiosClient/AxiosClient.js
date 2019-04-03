import axios from 'axios';

import {AsyncStorage} from 'react-native'

import {Global} from '../StoreManager/Actions'

const config = {
  baseURL: 'http://192.168.0.4/digitalpostcard/html/digitalpostcard-api/',
  auth: {
    username: 'AirStrike',
    password: 'DgPost1000kg'
  }
}

import store from '../StoreManager/Store'


AxiosClient = axios.create(config);

AxiosClient.interceptors.request.use((config) => {
  let originalRequest = config;
  store.dispatch(Global.axiosRequestInit());
  return AsyncStorage.getItem('auth_token').then((token) => {
    originalRequest['headers']['auth_token'] = token;
    return Promise.resolve(originalRequest);
  });
  
}, (err) => {
  return Promise.reject(err);
});


AxiosClient.interceptors.response.use((response) => {
  store.dispatch(Global.axiosRequestSuccess());
  return response;
}, function (error) {
  if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
       console.log(error.response.data);
       console.log(error.response.status);
      // console.log(error.response.headers);
      store.dispatch(Global.axiosResponceError(error.response.status, error.response.data));
  } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the 
      // browser and an instance of
      // http.ClientRequest in node.js
      //console.log(error.request);
  } else {
    return Promise.reject(error);
  }
});




export default AxiosClient;