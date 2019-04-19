import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import ViewWithBackground from '../Components/ViewWithBackground';
import { TextInput, Text, Surface} from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import FlipCard from 'react-native-flip-card'
import WriteMessageScreenStl from '../Themes/Styles/WriteMessageScreenStl';
import NavigationService from '../Navigation/NavigationService';
import Theme from '../Themes/Theme'

import {connect} from 'react-redux';

class SelectContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){
    this.props.dispatch({type: 'HIDE_DRAWER_HEADER'});
  }

  componentWillUnmount(){
    this.props.dispatch({type: 'SHOW_DRAWER_HEADER'});
  }

  render() {
    return (
      <ViewWithBackground withTraparentHeader={true}>
        <ScrollView style={WriteMessageScreenStl.container}>
          <TextInput 
            placeholder="Enter a email id"
          />

          <View style={WriteMessageScreenStl.creditInfo}>
            <Text>1 Credit out of 23 total, will be used</Text>
          </View>

          <BlueButton
            onPress={() => NavigationService.navigate('Credit', {

            })}
            style={WriteMessageScreenStl.nextButton}
          >Add Credit</BlueButton>

          <View style={WriteMessageScreenStl.previewContainer}>
            <FlipCard
              flipHorizontal={true}
              flipVertical={false}
              perspective={1000}
              friction={30}
            >
              {/* Face Side */}
              <View style={styles.face}>
                <Surface style={WriteMessageScreenStl.detailsSurface}>
                <AutoHeightImage 
                  source={{uri: 'https://picsum.photos/700'}} 
                  width={Dimensions.get('window').width - 2 * Theme.padding.sm}
                  resizeMode={'cover'}
                  style={WriteMessageScreenStl.detailsImage}
                />
              </Surface>
              </View>
              {/* Back Side */}
              <View style={WriteMessageScreenStl.back}>
                <Text>The Back and other text</Text>
              </View>
            </FlipCard>
            
          </View>

          <Text>Tap Geepes to See massage</Text>

        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(SelectContactScreen);
