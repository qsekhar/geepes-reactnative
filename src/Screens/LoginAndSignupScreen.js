import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'
import TutorialSlider from '../Components/TutorialSlider'

import {GreenButton, BlueButton} from '../Components/Utils'
import FacebookLoginButton from '../Containers/Utils/FacebookLoginButton'

import LandingScreenStl from '../Themes/Styles/LandingScreenStl'


export default class LoginAndSignupScreen extends Component {
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
          <BlueButton 
            onPress={() => this.props.navigation.navigate('Signup')}
            style={LandingScreenStl.fbLoginButton}
          >
            Sign up
          </BlueButton>
          <GreenButton 
            onPress={() => this.props.navigation.navigate('Login')}
            style={LandingScreenStl.emailLoginButton}
          >
            Login
          </GreenButton>
        </View>
      </ViewWithBackground>
    );
  }
}
