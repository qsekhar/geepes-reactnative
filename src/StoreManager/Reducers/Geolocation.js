import {
  GEOLOCATION_GET_LOCATION_SUCCESS,
} from '../Utils/Constants'

const initialState = {
  location : {
    speed: 0,
    longitude: 0,
    latitude: 0,
    accuracy: 0,
    heading: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    floor: 0,
    timestamp: 0,
  }
}

export default Geolocation = (state = initialState, action) => {
  switch (action.type) {
    case GEOLOCATION_GET_LOCATION_SUCCESS:
      return Object.assign({}, state, {location:action.payload});
    default:
      return state
  }
}

