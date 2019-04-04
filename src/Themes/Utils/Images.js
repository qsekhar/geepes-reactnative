
const baseUrl = 'http://192.168.0.4/digitalpostcard/html/digitalpostcard-api/'
const Authorization = 'Basic QWlyU3RyaWtlOkRnUG9zdDEwMDBrZw=='

export default {
  logo : require('../Images/logo.png'),
  background: require('../Images/app-background.jpg'),
  android: {
    tutorialSliders : [
      require('../Images/slider1.png'),
      require('../Images/slider1.png'),
      require('../Images/slider1.png'),
      require('../Images/slider1.png'),
      require('../Images/slider1.png')
    ]
  },
  userAvatar: {
    uri: baseUrl + 'user/avatar/',
    method: 'GET',
    headers: {
      Authorization: Authorization,
      Pragma: 'no-cache'
    },
  }
}