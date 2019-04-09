import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  logoContainer: {
    alignItems: 'center',
    marginTop: Theme.padding.xl,
  },
  formContainer: {
    marginVertical: Theme.padding.sm,
    paddingHorizontal: Theme.padding.xl,
  },
  logo: {
    height: 120,
    width: 120
  },
  signupButton:{
    marginTop: Theme.padding.xl,
  },
  paragraph: {
    marginTop: Theme.padding.md,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  loginLink:{
    paddingLeft: Theme.padding.sm,
  },
  loginLinkText: {
    color: Theme.colors.primary
  },
  textInputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  TextIcon:{
    position: 'absolute',
    right: 0,
    top: 20,
    color: Theme.colors.primary
  },
  textInput : {
    backgroundColor: 'transparent',
    width: '100%'
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Theme.padding.md
  }
});