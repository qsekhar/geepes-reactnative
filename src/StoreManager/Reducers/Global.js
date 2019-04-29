import {
  GLOBAL_AXIOS_INIT,
  GLOBAL_AXIOS_ERROR,
  GLOBAL_AXIOS_SUCCESS,
  CHANGE_USER_PASS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_POSTCARD_BY_LOCATION_ERROR
} from '../Utils/Constants'

const initialState = {
  isLoading : false,
  showAlert : false,
  showDrawerHeader: false,
  axiosErrorType : '',
  axiosErrorData : {data:{
    status:true,
    error: []
  }},
  axiosErrorStatus : '',
}

export default Global = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DRAWER_HEADER':
      return Object.assign({}, state, { showDrawerHeader:true });
    case 'HIDE_DRAWER_HEADER':
      return Object.assign({}, state, { showDrawerHeader:false });
    case GLOBAL_AXIOS_SUCCESS:
      return Object.assign({}, state, { isLoading:false });
    case GLOBAL_AXIOS_ERROR:
      return Object.assign({}, state, { isLoading:false, axiosErrorData:action.payload, showAlert:true });
    case CHANGE_USER_PASS_SUCCESS: 
    return Object.assign({}, state, { isLoading:false, axiosErrorData:{data:{error:'Password Changed Successfully, Login with new password'}}, showAlert:true });
    case GLOBAL_AXIOS_INIT:
      return Object.assign({}, state, { isLoading:true, axiosErrorData: {data:{
        status:true,
        error: []
      }}, axiosErrorStatus: '',  axiosErrorStatus: ''});
    case 'HIDE_GLOBAL_ALERT':
    return Object.assign({}, state, { showAlert:false, axiosErrorData: {data:{
      status:true,
      error: []
    }} });
    case GET_USER_DETAILS_ERROR:
      return Object.assign({}, state, { isLoading:false, axiosErrorData: {data: {error : 'Api is not working properly'}}, showAlert:true });
    case GET_POSTCARD_BY_LOCATION_ERROR:
      return Object.assign({}, state, { isLoading:false, axiosErrorData: {data: {error : 'Geepes are not available here'}}, showAlert:true });
    default:
      return state
  }
}