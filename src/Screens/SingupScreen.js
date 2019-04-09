import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

import SignupScreenStl from '../Themes/Styles/SignupScreenStl'
import themeImages from '../Themes/Utils/Images';

import { TextInput, Text, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils'

class SingupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <ViewWithBackground style={SignupScreenStl.container}>
        <ScrollView>
          <View style={SignupScreenStl.logoContainer}>
            <Image source={themeImages.logo} style={SignupScreenStl.logo}/>
          </View>
          <View style={SignupScreenStl.formContainer}>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="user" size={20}/>
              <TextInput
                label='User Name'
                icon='face'
                mode='flat'
                error={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
              <TextInput
                label='Email Address'
                mode='flat'
                error={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
              <TextInput
                label='Password'
                mode='flat'
                error={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
              <TextInput
                label='Confirm Password'
                mode='flat'
                error={false}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
            </View>
            <GreenButton
              style={SignupScreenStl.signupButton}
              >
                Sign up
            </GreenButton>

            <View style={SignupScreenStl.paragraph}>
              <Text>Already Registerd?</Text>
              <TouchableOpacity
                style={SignupScreenStl.loginLink}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text style={SignupScreenStl.loginLinkText}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default SingupScreen;
