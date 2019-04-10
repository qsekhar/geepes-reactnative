import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

import SignupScreenStl from '../Themes/Styles/SignupScreenStl'
import themeImages from '../Themes/Utils/Images';

import { TextInput, Text, Headline, Subheading, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils'

import { connect } from 'react-redux';
import {Auth} from '../StoreManager/Actions'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const {userLoginError} = this.props
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
                error={userLoginError.email && userLoginError.email != ''}
                mode='flat'
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userLoginError.email != ''}
              >
                {userLoginError.email}
              </HelperText>
            </View>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon 
                style={SignupScreenStl.TextIcon} 
                name={'key'} 
                size={20}
              />
              <TextInput
                label='Password'
                error={userLoginError.password && userLoginError.password != ''}
                mode='flat'
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userLoginError.password != ''}
              >
                {userLoginError.password}
              </HelperText>
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
              onPress={() => this.props.dispatch(Auth.loginWithEmail(this.state))}
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

const mapStateToProps = state => ({
  userLoginError : state.Auth.userLoginError
})
export default connect(mapStateToProps)(LoginScreen);
