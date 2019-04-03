import React, { Component } from 'react';
import { ImageBackground } from 'react-native';


import themeImages from '../Themes/Utils/Images'

export default class ViewWithBackground extends Component {
  render() {
    return (
      <ImageBackground
          source={themeImages.background}
          style={{
            width: '100%',
            height: '100%'
          }}
          imageStyle={{
            resizeMode: 'contain' // works only here!
          }}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}
