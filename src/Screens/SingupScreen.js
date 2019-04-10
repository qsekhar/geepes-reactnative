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
      first_name: '',
      last_name: '',
      email: '',
      password: ''
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
                value={this.state.first_name}
                onChangeText={text => this.setState({ first_name: text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={false}
              >
                Last Name is invalid!
              </HelperText>
            </View>

            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="user" size={20}/>
              <TextInput
                label='Last Name'
                error={false}
                icon='face'
                mode='flat'
                value={this.state.last_name}
                onChangeText={text => this.setState({ last_name: text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={false}
              >
                Last Name is invalid!
              </HelperText>
            </View>
            
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
              <TextInput
                label='Email Address'
                mode='flat'
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={false}
              >
                Email address is invalid!
              </HelperText>
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
              <TextInput
                label='Password'
                mode='flat'
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={false}
              >
                Password is invalid!
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
