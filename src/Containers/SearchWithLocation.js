import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

import SearchScreenStl from '../Themes/Styles/SearchScreenStl'
import Theme from '../Themes/Theme'
import {Surface, Subheading, Button} from 'react-native-paper'

import {Postcards} from '../StoreManager/Actions';

class SearchWithLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.dispatch(Postcards.getPostCardsByLocation());
  }

  render() {
    return (
      <ScrollView style={SearchScreenStl.container}>
        <Text> {this.props.locationErrorString} </Text>
        {this.props.locationData.image.map((item, index) => {
            return (
              <View key={index} style={SearchScreenStl.cardContainer}>
                <Surface style={SearchScreenStl.imageSurface}>
                  <AutoHeightImage 
                    source={{uri: item.original}} 
                    width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                    resizeMode={'cover'}
                    style={SearchScreenStl.cardImage}
                  />
                </Surface>
                <Subheading  style={SearchScreenStl.cardText}>{item.title}</Subheading>
              </View>
            )
          }
        )}
        <Button
          onPress={() => this.props.dispatch(Postcards.getPostCardsByLocation())}
        >Load More</Button>
      </ScrollView>
    );
  }
}

mapStateToProps = (state) => ({
  locationErrorString : state.PostCards.locationErrorString,
  locationData: state.PostCards.locationData
})

export default connect(mapStateToProps)(SearchWithLocation)
