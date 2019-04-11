import { StyleSheet } from 'react-native';
import Theme from '../Theme'

export default styles = StyleSheet.create({
  ...Theme.baseStructure, 
  container : {
    paddingHorizontal:  Theme.padding.sm,
    marginVertical:  Theme.padding.sm,
  },
  cardContainer:{
    flexDirection:'row'
  },
  card:{
    marginBottom: Theme.padding.sm,
    backgroundColor:'rgba(0, 155, 190, 0.3)',
    paddingRight: Theme.padding.sm
  },
  cardTexts: {
    flex: 3
  },
  cardCover: {
    flex: 2
  },
  detailsSurface : {
    elevation: 3,
    borderRadius: 10
  },
  detailsImage : {
    borderRadius: 10
  },
  subdetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Theme.padding.sm,
  },
  floatContainer: {
    flexDirection: 'row'
  },
  iconStl:{
    color: Theme.colors.primary
  },
  impDetails: {
    marginLeft: Theme.padding.sm
  },
  descriptionTextCon:{
    marginBottom: Theme.padding.lg
  },
  descriptionText: {
    textAlign: 'justify'
  }
});