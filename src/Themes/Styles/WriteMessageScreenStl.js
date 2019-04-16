import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  container : {
    paddingHorizontal:  Theme.padding.sm,
    marginVertical:  Theme.padding.sm,
  },
  detailsSurface : {
    elevation: 3,
    borderRadius: 10
  },
  detailsImage : {
    borderRadius: 10
  },
  messageContainer: {

  },
  textArea:{
    height: 100,
    marginTop: Theme.padding.sm,
  },
  toggleContainer:{
    flexDirection: 'row',
    marginTop: 5
  },
  toggleBtn:{
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  nextButton: {
    marginTop: Theme.padding.sm
  },
  creditInfo:{
    marginVertical: Theme.padding.md,
    paddingVertical: Theme.padding.md,
    alignItems: 'center',
    borderTopColor: Theme.colors.primary,
    borderBottomColor:  Theme.colors.primary,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStyle: 'dotted',
  },
  previewContainer:{
    marginTop: Theme.padding.sm
  },
  back: {
    backgroundColor: '#FFF',
    height: 100,
    padding: Theme.padding.md
  }
});