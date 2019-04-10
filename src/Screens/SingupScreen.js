import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

import SignupScreenStl from '../Themes/Styles/SignupScreenStl'
import themeImages from '../Themes/Utils/Images';

import { TextInput, Text, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils';

import { connect } from 'react-redux';
import {Auth} from '../StoreManager/Actions'

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
    const {userRegistrationError} = this.props
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
                error={userRegistrationError.first_name && userRegistrationError.first_name != ''}
                icon='face'
                mode='flat'
                value={this.state.first_name}
                onChangeText={text => this.setState({ first_name: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_REGISTRATION_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userRegistrationError.first_name != ''}
              >
                {userRegistrationError.first_name}
              </HelperText>
            </View>

            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="user" size={20}/>
              <TextInput
                label='Last Name'
                error={userRegistrationError.last_name && userRegistrationError.last_name != ''}
                icon='face'
                mode='flat'
                value={this.state.last_name}
                onChangeText={text => this.setState({ last_name: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_REGISTRATION_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userRegistrationError.last_name != ''}
              >
                {userRegistrationError.last_name}
              </HelperText>
            </View>
            
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
              <TextInput
                label='Email Address'
                error={userRegistrationError.email && userRegistrationError.email != ''}
                mode='flat'
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_REGISTRATION_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userRegistrationError.email != ''}
              >
                {userRegistrationError.email}
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
                error={userRegistrationError.password && userRegistrationError.password != ''}
                mode='flat'
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={text => this.setState({ password: text })}
                onFocus={() => this.props.dispatch({type:'REMOVE_REGISTRATION_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                visible={userRegistrationError.password != ''}
              >
                {userRegistrationError.password}
              </HelperText>
            </View>
            
            
            <GreenButton
              style={SignupScreenStl.signupButton}
              onPress={() => this.props.dispatch(Auth.registerWithEmail(this.state))}
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
const mapStateToProps = state => ({
  userRegistrationError : state.Auth.userRegistrationError
})
export default connect(mapStateToProps)(SingupScreen);
