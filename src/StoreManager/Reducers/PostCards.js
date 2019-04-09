import {
  GET_POSTCARD_BY_LOCATION_INIT,
  GET_POSTCARD_BY_LOCATION_SUCCESS,
  GET_POSTCARD_BY_LOCATION_NOT_FOUND,
  GET_POSTCARD_BY_LOCATION_ERROR,
  GEOLOCATION_SERVICE_NOT_ACTIVE
} from '../Utils/Constants'

const initialState = {
  locationErrorString : '',
  locationData : {
    image: [],
    total: 0,
    total_per_page: 0,
    next: 1,
  }
}

export default Global = (state = initialState, action) => {
  switch (action.type) {
    case GEOLOCATION_SERVICE_NOT_ACTIVE: 
    return Object.assign({}, state, { locationErrorString: 'Please trun on your GPS' });
    case GET_POSTCARD_BY_LOCATION_NOT_FOUND:
      return Object.assign({}, state, { locationErrorString: action.payload });
    case GET_POSTCARD_BY_LOCATION_SUCCESS:
      const {image, total, total_per_page, next} = action.payload
      return { 
        ...state,
        locationData : {
          ...state.locationData,
            total: total,
            total_per_page: total_per_page,
            next: next,
            image : [...state.locationData.image, ...image]
        } 
    }
    default:
      return state
  }
}