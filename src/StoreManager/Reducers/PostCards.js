import {
  GET_POSTCARD_BY_LOCATION_INIT,
  GET_POSTCARD_BY_LOCATION_SUCCESS,
  GET_POSTCARD_BY_LOCATION_NOT_FOUND,
  GET_POSTCARD_BY_LOCATION_ERROR,
  GEOLOCATION_SERVICE_NOT_ACTIVE,
  GET_ALLCATEGORIES_SUCCESS,
  GET_POSTCARD_BY_CATEGORY_SUCCESS,
  GET_POSTCARD_BY_CATEGORY_NOT_FOUND,

  CHANGE_CATEGORY_SEARCH_STRING
} from '../Utils/Constants'

const initialState = {
  locationErrorString : '',
  categorySearchQuery : '',
  locationData : {
    image: [],
    total: 0,
    total_per_page: 0,
    next: 1,
  },
  categoryData : {
    image: [],
    total: 0,
    total_per_page: 0,
    next: 1,
  },
  categoryErrorString: '',
  categories : []
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
    case GET_POSTCARD_BY_CATEGORY_SUCCESS:
      return { 
        ...state,
        categoryErrorString: '',
        categoryData : {
          ...state.categoryData,
            total: action.payload.total,
            total_per_page: action.payload.total_per_page,
            next: next,
            image : [...state.categoryData.image, ...action.payload.image]
        } 
      }
    case GET_POSTCARD_BY_CATEGORY_NOT_FOUND:
      return Object.assign({}, state, { categoryErrorString: action.payload });  
    case GET_ALLCATEGORIES_SUCCESS: 
      return Object.assign({}, state, { categories: action.payload });
    case CHANGE_CATEGORY_SEARCH_STRING: 
      return Object.assign({}, state, { categorySearchQuery: action.payload , categoryData : {image : []}});
   
    default:
      return state
  }
}