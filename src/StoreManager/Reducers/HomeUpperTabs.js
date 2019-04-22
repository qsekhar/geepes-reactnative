import {
  CHANGE_HOME_UPPER_TAB
} from '../Utils/Constants'

const initialState = {
  index: 0,
  routes: [
    { key: 'location', title: 'Location' },
    { key: 'category', title: 'Category' },
    //{ key: 'tag', title: 'Tag' },
  ],
}

export default HomeUpperTabs = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HOME_UPPER_TAB:
      return Object.assign({}, state, { index: action.payload });
    default:
      return state
    }    
}