import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  container : {
    paddingHorizontal:  Theme.padding.md,
  },
  topSection: {
    flexDirection: 'row',
    marginTop: Theme.padding.md,
  },
  middleSection: {
    flexDirection: 'row',
  },
  floatSection:{
    flex: 1
  },
  avaterSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  inputfieldContainer:{

  },
  textInput: {
    backgroundColor: 'transparent'
  },
  radioText: {
    paddingTop: 8
  }
});