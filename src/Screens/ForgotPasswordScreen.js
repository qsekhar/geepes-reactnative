import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'

import SignupScreenStl from '../Themes/Styles/SignupScreenStl'
import themeImages from '../Themes/Utils/Images';

import { TextInput, Text, Subheading, HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils'

import { connect } from 'react-redux';
import {Auth} from '../StoreManager/Actions'


class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      code: '',
      password: '',
      password_again: ''
    };
  }

  render() {
    const {reqUserPassError,showPasswordResetScreen} = this.props
    let HTML = <View></View>
    
    if(!showPasswordResetScreen){
      HTML = 
        <View>
          <View style={SignupScreenStl.headingContainer}>
            <Subheading>Reset Your Password</Subheading>
          </View>

          <View style={SignupScreenStl.textInputContainer}>
            <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
            <TextInput
              label='Email Address'
              error={reqUserPassError.email && reqUserPassError.email != ''}
              mode='flat'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              onFocus={() => this.props.dispatch({type:'REMOVE_REQ_USER_PASS_ERROR'})}
              style={SignupScreenStl.textInput}
            />
            <HelperText
              style={SignupScreenStl.helperText}
              type="error"
              visible={reqUserPassError.email != ''}
            >
              {reqUserPassError.email}
            </HelperText>
          </View>
          
          
          <GreenButton
            style={SignupScreenStl.signupButton}
            onPress={() => this.props.dispatch(Auth.requestPasswordResetCode(this.state))}
            >
              Send Code
          </GreenButton>
        </View>
    } else {
      HTML = 
      <View>
        <View style={SignupScreenStl.headingContainer}>
          <Subheading>Enter code and new password</Subheading>
        </View>

        <View style={SignupScreenStl.textInputContainer}>
          <Icon style={SignupScreenStl.TextIcon} name="envelope-o" size={20}/>
          <TextInput
            label='Email Address'
            error={reqUserPassError.email && reqUserPassError.email != ''}
            mode='flat'
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            onFocus={() => this.props.dispatch({type:'REMOVE_REQ_USER_PASS_ERROR'})}
            style={SignupScreenStl.textInput}
          />
          <HelperText
            style={SignupScreenStl.helperText}
            type="error"
            visible={reqUserPassError.email != ''}
          >
            {reqUserPassError.email}
          </HelperText>
        </View>

        <View style={SignupScreenStl.textInputContainer}>
          <Icon style={SignupScreenStl.TextIcon} name="arrow-left" size={20}/>
          <TextInput
            label='Code'
            error={reqUserPassError.code && reqUserPassError.code != ''}
            mode='flat'
            value={this.state.code}
            onChangeText={text => this.setState({ code: text })}
            onFocus={() => this.props.dispatch({type:'REMOVE_REQ_USER_PASS_ERROR'})}
            style={SignupScreenStl.textInput}
          />
          <HelperText
            style={SignupScreenStl.helperText}
            type="error"
            visible={reqUserPassError.code != ''}
          >
            {reqUserPassError.code}
          </HelperText>
        </View>

        <View style={SignupScreenStl.textInputContainer}>
          <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
          <TextInput
            label='Password'
            error={reqUserPassError.password && reqUserPassError.password != ''}
            mode='flat'
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            onFocus={() => this.props.dispatch({type:'REMOVE_REQ_USER_PASS_ERROR'})}
            style={SignupScreenStl.textInput}
            secureTextEntry={true}
          />
          <HelperText
            style={SignupScreenStl.helperText}
            type="error"
            visible={reqUserPassError.password != ''}
          >
            {reqUserPassError.password}
          </HelperText>
        </View>

        <View style={SignupScreenStl.textInputContainer}>
          <Icon style={SignupScreenStl.TextIcon} name="key" size={20}/>
          <TextInput
            label='Password Again'
            error={reqUserPassError.password_again && reqUserPassError.password_again != ''}
            mode='flat'
            value={this.state.password_again}
            onChangeText={text => this.setState({ password_again: text })}
            onFocus={() => this.props.dispatch({type:'REMOVE_REQ_USER_PASS_ERROR'})}
            style={SignupScreenStl.textInput}
            secureTextEntry={true}
          />
          <HelperText
            style={SignupScreenStl.helperText}
            type="error"
            visible={reqUserPassError.password_again != ''}
          >
            {reqUserPassError.password_again}
          </HelperText>
        </View>
        
        
        <GreenButton
          style={SignupScreenStl.signupButton}
          onPress={() => this.props.dispatch(Auth.changePasswordWithCode(this.state))}
          >
            Reset Password
        </GreenButton>
      </View>
    }




    return (
      <ViewWithBackground style={SignupScreenStl.container}>
        <ScrollView>
          <View style={SignupScreenStl.logoContainer}>
            <Image source={themeImages.logo} style={SignupScreenStl.logo}/>
          </View>
          <View style={SignupScreenStl.formContainer}>
            {HTML}
            <View style={SignupScreenStl.paragraph}>
              <Text>New User?</Text>
              <TouchableOpacity
                style={SignupScreenStl.loginLink}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text style={SignupScreenStl.loginLinkText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

const mapStateToProps = state => ({
  reqUserPassError : state.Auth.reqUserPassError,
  showPasswordResetScreen: state.Auth.showPasswordResetScreen,
})
export default connect(mapStateToProps)(ForgotPasswordScreen);

