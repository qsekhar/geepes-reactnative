import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-paper'

import ViewWithBackground from '../Components/ViewWithBackground'
import TutorialSlider from '../Components/TutorialSlider'

import {GreenButton, BlueButton} from '../Components/Utils'

import { LoginButton, AccessToken } from 'react-native-fbsdk';

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
          <LoginButton
            onLoginFinished={
              (error, result) => {
                if (error) {
                  console.log("login has error: " + result.error);
                } else if (result.isCancelled) {
                  console.log("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => console.log("logout.")}/>
          <BlueButton>
            Login With Facebook
          </BlueButton>
          <GreenButton>
            Use Email Instead
          </GreenButton>
        </View>
      </ViewWithBackground>
    );
  }
}
