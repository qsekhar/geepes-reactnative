import React, { Component } from 'react';
import { View } from 'react-native';

import {BlueButton} from '../../Components/Utils'

import {Auth} from '../../StoreManager/Actions'
import {connect} from 'react-redux';

class FacebookLoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <BlueButton
          onPress={() => this.props.dispatch(Auth.loginWithFacebook())}
        >
          Login With Facebook
        </BlueButton>
      </View>
    );
  }
}

export default connect()(FacebookLoginButton)
