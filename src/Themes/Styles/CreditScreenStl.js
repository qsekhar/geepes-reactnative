import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  container : {
    paddingHorizontal:  Theme.padding.md,
    marginVertical:  Theme.padding.sm
  },
  creditRemaining: {
    flexDirection : 'row',
    backgroundColor: '#FFF',
    padding: Theme.padding.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenHeadline: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: Theme.colors.primary,
    fontSize: 20,
    marginRight: Theme.padding.sm,
  },
  descriptionStyle :{
    color: Theme.colors.accent
  },
  buyBtn:{
    justifyContent: 'center',
    height: 30,
    marginTop: Theme.padding.sm,
  },
  creditNeva:{
    marginTop: Theme.padding.md,
    alignItems: 'center'
  },
  problemContainer: {
    paddingHorizontal:  Theme.padding.md,
    marginTop: Theme.padding.xl,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightPaddingContainer: {
    paddingRight: Theme.padding.sm
  }
})