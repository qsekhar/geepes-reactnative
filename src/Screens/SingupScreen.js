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
                label='First Name'
                error={false}
                icon='face'
                mode='flat'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={!this.state.text.includes('@')}
              >
                First Name is invalid!
              </HelperText>
            </View>

            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="user" size={20}/>
              <TextInput
                label='Last Name'
                error={false}
                icon='face'
                mode='flat'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={!this.state.text.includes('@')}
              >
                First Name is invalid!
              </HelperText>
            </View>
            
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
              <TextInput
                label='Email Address'
                mode='flat'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={!this.state.text.includes('@')}
              >
                Email address is invalid!
              </HelperText>
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
              <TextInput
                label='Password'
                mode='flat'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={!this.state.text.includes('@')}
              >
                Password is invalid!
              </HelperText>
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
              <TextInput
                label='Confirm Password'
                mode='flat'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={!this.state.text.includes('@')}
              >
                Confirm Password is invalid!
              </HelperText>
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
