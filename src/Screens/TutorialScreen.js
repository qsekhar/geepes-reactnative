import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'
import TutorialSlider from '../Components/TutorialSlider'

import {GreenButton} from '../Components/Utils'
import FacebookLoginButton from '../Containers/Utils/FacebookLoginButton'

import LandingScreenStl from '../Themes/Styles/LandingScreenStl'


export default class TutorialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header : null
  }

  render() {
    return (
      <ViewWithBackground>
        <View style={LandingScreenStl.sliderContainer}>
          <TutorialSlider />
        </View>
        
      </ViewWithBackground>
    );
  }
}
