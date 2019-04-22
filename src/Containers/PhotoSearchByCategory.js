import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';

import SearchScreenStl from '../Themes/Styles/SearchScreenStl';
import Theme from '../Themes/Theme'
import {Surface, Subheading, Button, Searchbar, IconButton} from 'react-native-paper'

import FlipCard from 'react-native-flip-card'
import NavigationService from '../Navigation/NavigationService'

import { Dropdown } from 'react-native-material-dropdown';


import {Postcards} from '../StoreManager/Actions';

class PhotoSearchByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySearchQuery:'',
      category : '',
      searhFlip : false
    };
  }

  componentWillMount(){
    this.props.dispatch(Postcards.getAllCategory());
  }

  render() {
    return (
      <View>
        <View style={SearchScreenStl.searchContainer}>
          <FlipCard
            clickable={false}
            flipHorizontal={false}
            flipVertical={true}
            perspective={1000}
            friction={1000}
            flip={this.state.searhFlip}
            style={SearchScreenStl.flipCardStyle}
          >
            <View>
              <Searchbar
                placeholder="Search Category"
                onChangeText={query => { this.setState({ categorySearchQuery: query }); }}
                value={this.state.categorySearchQuery}
                onIconPress={() =>  this.props.dispatch(Postcards.getPostCategoryBySearhString(this.state.categorySearchQuery))}
              />
            </View>
            <View style={SearchScreenStl.nagetMargin}>
              <Dropdown 
                pickerStyle={SearchScreenStl.dropdown}
                label='Select Category'
                data={this.props.categories}
                labelExtractor={(item, index) => item.name}
                valueExtractor={(item, index) => item.name}
                onChangeText={(item) =>  this.props.dispatch(Postcards.getPostCategoryBySearhString(item))}
              />
            </View>
          </FlipCard>
          <View style={SearchScreenStl.flipIconStyle}>
            <IconButton
              icon="flip"
              size={20}
              onPress={() =>  this.setState({searhFlip : !this.state.searhFlip})}
            />
          </View>
        </View>
        <ScrollView style={SearchScreenStl.container}>
          <Text>{this.props.categoryErrorString}</Text>
          {this.props.categoryData.image.map((item, index) => {
              return (
                <View key={index} style={SearchScreenStl.cardContainer}>
                  <TouchableOpacity
                    onPress={() => NavigationService.navigate('WriteMessage', {
                      id: item.id,
                      title: item.title,
                      originalImage : item.original
                    })}
                  >
                    <Surface style={SearchScreenStl.imageSurface}>
                      <AutoHeightImage 
                        source={{uri: item.original}} 
                        width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                        resizeMode={'cover'}
                        style={SearchScreenStl.cardImage}
                      />
                    </Surface>
                    <Subheading  style={SearchScreenStl.cardText}>{item.title}</Subheading>
                  </TouchableOpacity>
                </View>
              )
            }
          )}

          {this.props.categoryData.image.length > 0 ? <Button
            style={{marginBottom: 100}}
            onPress={() => this.props.dispatch(Postcards.getPostCardsByLocation())}
          >Load More</Button> : <Text></Text> }
          

        </ScrollView>
      </View>
    );
  }
}

mapStateToProps = (state) => ({
  locationErrorString : state.PostCards.locationErrorString,
  categoryData: state.PostCards.categoryData,
  categories: state.PostCards.categories,
  categoryErrorString: state.PostCards.categoryErrorString
})

export default connect(mapStateToProps)(PhotoSearchByCategory)
