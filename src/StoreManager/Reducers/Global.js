import {
  GLOBAL_AXIOS_INIT,
  GLOBAL_AXIOS_ERROR,
  GLOBAL_AXIOS_SUCCESS
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
    default:
      return state
  }
}