import {
  GEOLOCATION_REQ_INIT,
  GEOLOCATION_REQ_GRANTED,
  GEOLOCATION_REQ_DENIED,
  
  GEOLOCATION_GET_LOCATION_INIT,
  GEOLOCATION_GET_LOCATION_SUCCESS,
  GEOLOCATION_SERVICE_NOT_ACTIVE,

  GET_POSTCARD_BY_LOCATION_INIT,
  GET_POSTCARD_BY_LOCATION_SUCCESS,
  GET_POSTCARD_BY_LOCATION_NOT_FOUND,
  GET_POSTCARD_BY_LOCATION_ERROR,
} from '../Utils/Constants'

import RNLocation from 'react-native-location';
import AxiosClient from '../../AxiosClient/AxiosClient'

const getPostCardsByLocation = () => (dispatch, getState) =>  {
  dispatch({type: GEOLOCATION_REQ_INIT})
  RNLocation.configure({
    distanceFilter: 5.0
  })
   
  RNLocation.requestPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
      rationale: {
        title: "We need to access your location",
        message: "We use your location to show where you are on the map",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }
    }
  }).then(granted => {
    if (granted) {
      dispatch({type: GEOLOCATION_REQ_GRANTED})
      dispatch({type: GEOLOCATION_GET_LOCATION_INIT})

      try {
        RNLocation.getLatestLocation({ timeout: 60000 })
        .then(locations => {
          
          let latitude = locations.latitude;
          let longitude = locations.longitude;

          if(latitude == 0 && longitude == 0){
            dispatch({type: GEOLOCATION_SERVICE_NOT_ACTIVE})
          } else {
            dispatch({type: GEOLOCATION_GET_LOCATION_SUCCESS, payload: locations[0]})

            var formData = new FormData();

            formData.append('lat', latitude);
            formData.append('lon', longitude);

            const state = getState()
            formData.append('page', state.PostCards.locationData.next);
          
            AxiosClient.post('api/image/get/location/', formData)
              .then(function (response) {
                if(typeof response.data.imagelist.error !== 'undefined'){
                  dispatch({type: GET_POSTCARD_BY_LOCATION_NOT_FOUND, payload: response.data.imagelist.error});
                } else {
                  dispatch({type: GET_POSTCARD_BY_LOCATION_SUCCESS, payload: response.data.imagelist.data});
                }
              })
              .catch((error) => {
                dispatch({type: GET_POSTCARD_BY_LOCATION_ERROR, payload: "Can't get Postcards"});
              })

          }
        })
      } catch (exception) {
        dispatch({type: GET_POSTCARD_BY_LOCATION_ERROR, payload: "Can't get Postcards"});
      }
      
    } else {
      dispatch({type: GEOLOCATION_REQ_DENIED})
    }
  })
}

export default {
  getPostCardsByLocation
}