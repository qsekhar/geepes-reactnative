
//const baseUrl = 'http://192.168.0.4/digitalpostcard/html/geepes-api/'
const baseUrl = 'http://ec2-54-68-205-162.us-west-2.compute.amazonaws.com/geepes-api/'
const Authorization = 'Basic QWlyU3RyaWtlOkRnUG9zdDEwMDBrZw=='

export default {
  logo : require('../Images/logo.png'),
  headerLogo : require('../Images/small-header-logo.png'),
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
  },
  postcardImages : {
    method: 'POST',
    headers: {
      Authorization: Authorization,
      Pragma: 'no-cache'
    },
  }
}