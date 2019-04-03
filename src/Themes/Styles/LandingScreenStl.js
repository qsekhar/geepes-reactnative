import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  sliderContainer : {
    flex: 2
  },
  buttonContainer : {
    flex: 1,
    paddingHorizontal: Theme.padding.xxl,
    justifyContent: 'center',
  },
  fbLoginButton: {
   
  },
  emailLoginButton : {
    marginTop: Theme.padding.sm
  }
});