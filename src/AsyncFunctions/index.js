import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage'

import { LoginManager } from "react-native-fbsdk";

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('auth_token');
    LoginManager.logOut();
    return true;
  }
  catch(exception) {
    return false;
  }
}

export const getLocation = async() => {
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
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
          locations;
        })
      } else {
        console.log('not granted')
      }
    })
}