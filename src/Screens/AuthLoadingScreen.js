import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

import { connect } from 'react-redux';
import { Auth } from '../StoreManager/Actions'

import themeImages from '../Themes/Utils/Images'

class AuthLoadingScreen extends Component {

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  _bootstrapAsync = async () => {
    //AsyncStorage.removeItem('auth_token');
    AsyncStorage.getItem('auth_token')
    .then(auth_token => {
      if(auth_token){
        this.props.dispatch({type: 'SHOW_DRAWER_HEADER'});
        this.props.dispatch(Auth.getUserDetails());
        this.props.navigation.navigate('App');
      } else {
        this.props.dispatch({type: 'HIDE_DRAWER_HEADER'});
        this.props.navigation.navigate('Auth');
      }
    });
  };

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();

    this._bootstrapAsync();
  }


  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };
    return (
      <LinearGradient
        colors={[
          "#00FFFF",
          "#17C8FF",
          "#329BFF",
          "#4C64FF",
          "#6536FF",
          "#8000FF"
        ]}
        style={styles.container}
      >
      <Animated.View style={[styles.ring, truckStyle]}>
        <Animated.Image
          source={themeImages.logo}
          style={[
            {
              resizeMode: "contain",
              width: 200,
              height: 200
            }
          ]}
        />
      </Animated.View>

      <Animated.View
        style={[
          {
            position: "absolute",
            bottom: 20,
            width: width / 2,
            height: 4,
            backgroundColor: "#fff",
            borderRadius: 2
          },
          scaleText
        ]}
      />
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
    backgroundColor: "#40C4FF",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 50
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});


export default connect()(AuthLoadingScreen);
