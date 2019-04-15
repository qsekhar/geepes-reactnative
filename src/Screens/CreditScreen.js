import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'


import Theme from '../Themes/Theme'

import {connect} from 'react-redux';

class CreditScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    
  }

  render() {
    return (
      <ViewWithBackground>
        
      </ViewWithBackground>
    );
  }
}

export default connect()(CreditScreen);