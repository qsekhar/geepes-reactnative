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
    borderRadius: 10,
    minHeight: 200
  },
  cardImage:{
    borderRadius: 10,
  },
  cardText:{
    color: '#000',
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal:  Theme.padding.sm,
    marginTop: Theme.padding.sm
  },
  nagetMargin: {
    marginTop: -15
  },
  flipCardStyle:{
    flex:8
  },
  flipIconStyle:{
    flex:1
  }
});