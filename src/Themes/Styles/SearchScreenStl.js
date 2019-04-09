import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  container : {
    paddingHorizontal:  Theme.padding.sm,
  },
  cardContainer : {
    paddingVertical: 10
  },
  imageSurface:{
    elevation: 12,
    borderRadius: 10
  },
  cardImage:{
    borderRadius: 10
  },
  cardText:{
    color: '#000',
    paddingTop: 10,
  }
});