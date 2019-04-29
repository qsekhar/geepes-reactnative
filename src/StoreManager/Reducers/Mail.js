import {
  GET_NEW_MSG_INFO
} from '../Utils/Constants'

const initialState = {
  inboxcount : 0,
}

export default Mail = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_MSG_INFO:
      return Object.assign({}, state, { inboxcount: action.payload });
    default:
      return state
  }
}