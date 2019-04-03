import React, { Component } from 'react';
import { View } from 'react-native';

import ImageSlider from 'react-native-image-slider';
import themeImages from '../Themes/Utils/Images'

export default class TutorialSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ImageSlider images={themeImages.android.tutorialSliders} style={{ backgroundColor:'transparent'}}/>
      </View>
    );
  }
}
