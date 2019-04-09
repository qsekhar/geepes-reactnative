import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

import SignupScreenStl from '../Themes/Styles/SignupScreenStl'
import themeImages from '../Themes/Utils/Images';

import { TextInput, Text, Headline, Subheading } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils'

class LoginScreen extends Component {
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
            
            <View style={SignupScreenStl.headingContainer}>
              <Headline>Welcome</Headline>
              <Subheading>Login to continue</Subheading>
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

            <View style={SignupScreenStl.paragraph}>
              <TouchableOpacity
                  style={SignupScreenStl.loginLink}
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                >
                  <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            
            <GreenButton
              style={SignupScreenStl.signupButton}
              >
                Login
            </GreenButton>

            <View style={SignupScreenStl.paragraph}>
              <Text>New User?</Text>
              <TouchableOpacity
                style={SignupScreenStl.loginLink}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text style={SignupScreenStl.loginLinkText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default LoginScreen;
