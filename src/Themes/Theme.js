import { DefaultTheme } from 'react-native-paper';

import {Dimensions} from 'react-native'


export default theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#296f00',
    accent: '#004073',
    orange: '#f1612f'
  },

  dimensions : {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
  },

  padding : {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    xxl: 60
  },

  baseStructure : {
    container: {
      flex: 1
    }
  }
};