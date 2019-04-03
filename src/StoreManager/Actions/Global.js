import {
  GLOBAL_AXIOS_ERROR,
  GLOBAL_AXIOS_INIT,
  GLOBAL_AXIOS_SUCCESS
} from '../Utils/Constants'

const axiosRequestInit = () => (dispatch, getState) =>  {
  dispatch({type:GLOBAL_AXIOS_INIT});
}

const axiosResponceError = (status, data) => (dispatch, getState) =>  {
  dispatch({type:GLOBAL_AXIOS_ERROR, payload: { status:status, data:data}});
}

const axiosRequestError = () => (dispatch, getState) =>  {
  dispatch({type:GLOBAL_AXIOS_ERROR});
}

const axiosRequestSuccess = () => (dispatch, getState) =>  {
  dispatch({type:GLOBAL_AXIOS_SUCCESS});
}



export default {
  axiosRequestInit,
  axiosResponceError,
  axiosRequestError,
  axiosRequestSuccess
}