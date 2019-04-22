import {
  CHANGE_GEEPES_INFO,
  CHANGE_GEEPES_MESSAGE,
  CHANGE_GEEPES_FONTFAMILY,
  CHANGE_GEEPES_FONTCOLOR,
  CHANGE_GEEPES_MESSAGE_COUNTINFO
} from '../Utils/Constants'

const initialState = {
  id : 0,
  title: '',
  originalImage: '',
  message: '',
  fontColor : 'black',
  fontFamily: 'Arial',
  messageCountInfo : 'Enter Your Message (0 / 120)'
}


export default WriteGeepes = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GEEPES_INFO: 
      return Object.assign({}, state, { id: action.payload.id, title: action.payload.title, originalImage: action.payload.originalImage });
    case CHANGE_GEEPES_MESSAGE: 
      return Object.assign({}, state, { message: action.payload }); 
    case CHANGE_GEEPES_FONTFAMILY: 
      return Object.assign({}, state, { fontFamily: action.payload });
    case CHANGE_GEEPES_FONTCOLOR: 
      return Object.assign({}, state, { fontColor: action.payload });
    case CHANGE_GEEPES_MESSAGE_COUNTINFO: 
      return Object.assign({}, state, { messageCountInfo: action.payload });
    default : 
      return state;
  }
}      