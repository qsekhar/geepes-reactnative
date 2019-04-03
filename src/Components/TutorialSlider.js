import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

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
        <ImageSlider 
          images={themeImages.android.tutorialSliders} 
          style={styles.sliderContainer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer : {
    backgroundColor:'transparent'
  },
  button: {
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#004073',
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    backgroundColor: '#f1612f',
  },
});