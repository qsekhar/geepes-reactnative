import {
  CHANGE_GEEPES_INFO,
  CHANGE_GEEPES_MESSAGE,
  CHANGE_GEEPES_FONTFAMILY,
  CHANGE_GEEPES_FONTCOLOR,
  CHANGE_GEEPES_MESSAGE_COUNTINFO,

  SEND_CARD_INIT,
  SEND_CARD_SUCCESS,
  SEND_CARD_ERROR,

  GLOBAL_AXIOS_ERROR
} from '../Utils/Constants'

import NavigationService from '../../Navigation/NavigationService' 
import AxiosClient from '../../AxiosClient/AxiosClient'

const changeCard = (params) => (dispatch, getState) =>  {
  dispatch({type:CHANGE_GEEPES_INFO, payload: params})
}

const changeMessage = (message) => (dispatch, getState) =>  {
  dispatch({type:CHANGE_GEEPES_MESSAGE, payload: message})
  dispatch({type:CHANGE_GEEPES_MESSAGE_COUNTINFO, payload: `Enter Your Message (${message.length} / 120)`})
}

const changeFontFamily = (params) => (dispatch, getState) =>  {
  dispatch({type:CHANGE_GEEPES_FONTFAMILY, payload: params})
}

const changeFontColor = (params) => (dispatch, getState) =>  {
  dispatch({type:CHANGE_GEEPES_FONTCOLOR, payload: params})
}

const sendGepeesByEmail = (params) => (dispatch, getState) =>  {

  const state = getState();
  var formData = new FormData();
  formData.append('postcardId', state.WriteGeepes.id);
  formData.append('recipientName', params.name);
  formData.append('message',  state.WriteGeepes.message);
  formData.append('font', state.WriteGeepes.fontFamily);
  formData.append('color', state.WriteGeepes.fontColor);
  formData.append('recipientEmail', params.email);
  formData.append('is_location_postcard', 0);

  dispatch({type:SEND_CARD_INIT})
  AxiosClient.post('api/postcard/send/mail', formData)
    .then(function (response) {
      if(response.data.status){
        dispatch({type: SEND_CARD_SUCCESS, payload:response.data});
        NavigationService.navigate('AuthLoading');
      } else {
        dispatch({type: SEND_CARD_ERROR, payload: "Somethig went wrong"});
      }
    })
    .catch((error) => {
      dispatch({type: SEND_CARD_ERROR, payload: "Can't send Postcards"});
    })
}

export default {
  changeCard,
  changeMessage,
  changeFontFamily,
  changeFontColor,
  sendGepeesByEmail
}