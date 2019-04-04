import RNLocation from 'react-native-location';
import {NetInfo} from '@react-native-community/netinfo';

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('auth_token');
    return true;
  }
  catch(exception) {
    return false;
  }
}

export const getLocation = async() => {
  RNLocation.getCurrentPermission()
  .then(currentPermission => {
    console.log(currentPermission)
  })
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
          console.log(locations)
          /* Example location returned
          {
            speed: -1,
            longitude: -0.1337,
            latitude: 51.50998,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
            floor: 0
            timestamp: 1446007304457.029
          }
          */
        })
      } else {
        console.log('not granted')
      }
    })
}

export const getNetInfo = async() => {
  NetInfo.getConnectionInfo().then((connectionInfo) => {
    console.log(
      'Initial, type: ' +
        connectionInfo.type +
        ', effectiveType: ' +
        connectionInfo.effectiveType,
    );
  });
  function handleFirstConnectivityChange(connectionInfo) {
    console.log(
      'First change, type: ' +
        connectionInfo.type +
        ', effectiveType: ' +
        connectionInfo.effectiveType,
    );
    NetInfo.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange,
    );
  }
  NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
}