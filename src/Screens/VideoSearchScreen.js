import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

export default class VideoSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ViewWithBackground>
        <Text> VideoSearchScreen </Text>
      </ViewWithBackground>
    );
  }
}
