import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'
import TutorialSlider from '../Components/TutorialSlider'

import {GreenButton} from '../Components/Utils'
import FacebookLoginButton from '../Containers/Utils/FacebookLoginButton'


export default class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ViewWithBackground>
        <TutorialSlider />
        <View>
          <FacebookLoginButton />
          <GreenButton>
            Use Email Instead
          </GreenButton>
        </View>
      </ViewWithBackground>
    );
  }
}
