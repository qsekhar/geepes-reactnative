import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'
import TutorialSlider from '../Components/TutorialSlider'

import {GreenButton} from '../Components/Utils'
import FacebookLoginButton from '../Containers/Utils/FacebookLoginButton'

import LandingScreenStl from '../Themes/Styles/LandingScreenStl'


export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ViewWithBackground>
        <View style={LandingScreenStl.sliderContainer}>
          <TutorialSlider />
        </View>
        
        <View style={LandingScreenStl.buttonContainer}>
          <FacebookLoginButton style={LandingScreenStl.fbLoginButton}/>
          <GreenButton  style={LandingScreenStl.emailLoginButton}>
            Use Email Instead
          </GreenButton>
        </View>
      </ViewWithBackground>
    );
  }
}
