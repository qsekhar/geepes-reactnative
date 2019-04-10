import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import {Text, TextInput, HelperText, Avatar} from 'react-native-paper';
import themeImages from '../Themes/Utils/Images';
import MyAccountScreenStl from '../Themes/Styles/MyAccoutScreenStl'

import AsyncStorage from '@react-native-community/async-storage';

import ViewWithBackground from '../Components/ViewWithBackground'

import { connect } from 'react-redux';

class MyAccountScreen extends Component {
  static navigationOptions = {
    title: 'My Account',
    
  };
  
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      userAvatar :  <Avatar.Image size={150} source={themeImages.userAvatar} />
    };

    AsyncStorage.getItem('auth_token').then(token => {
      const userAvatar = themeImages.userAvatar;
      userAvatar.uri = userAvatar.uri + token;
      this.setState({ userAvatar: <Avatar.Image size={150} source={userAvatar} /> } )
    })
  }

  componentWillMount(){
    this.props.dispatch({type: 'HIDE_DRAWER_HEADER'});
  }

  componentWillUnmount(){
    this.props.dispatch({type: 'SHOW_DRAWER_HEADER'});
  }

  render() {
    return (
      <ViewWithBackground withTraparentHeader={true}>
        <ScrollView style={MyAccountScreenStl.container}>
          <View>
            <Text>Please fill the remaining details when you can to help us improve your experience with our app </Text>
          </View>

          <View style={MyAccountScreenStl.topSection}>
            <View style={MyAccountScreenStl.floatSection}>
              <View style={MyAccountScreenStl.inputfieldContainer}>
                <TextInput
                  style={MyAccountScreenStl.textInput}
                  label='First Name'
                  error={false}
                  mode='flat'
                  value={this.state.first_name}
                  onChangeText={text => this.setState({ first_name: text })}
                  //onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
                />
                <HelperText
                  type="error"
                  visible={true}
                >
                  bla bla bla
                </HelperText>
              </View>

              <View style={MyAccountScreenStl.inputfieldContainer}>
                <TextInput
                  style={MyAccountScreenStl.textInput}
                  label='Last Name'
                  error={false}
                  mode='flat'
                  value={this.state.last_name}
                  onChangeText={text => this.setState({ last_name: text })}
                  //onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
                />
                <HelperText
                  type="error"
                  visible={true}
                >
                  bla bla bla
                </HelperText>
              </View>

            </View>
            <View style={MyAccountScreenStl.avaterSection}>
              {this.state.userAvatar}
            </View>
          </View>
          
          <View style={MyAccountScreenStl.emailSection}>
            <TextInput
              style={MyAccountScreenStl.textInput}
              label='Email'
              error={false}
              mode='flat'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              //onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
            />
            <HelperText
              type="error"
              visible={true}
            >
              bla bla bla
            </HelperText>
          </View>

          <View style={MyAccountScreenStl.middleSection}>
            <View style={MyAccountScreenStl.floatSection}>
              <Text>Country</Text>
            </View>
            <View style={MyAccountScreenStl.floatSection}>
              <Text>asdsadsad</Text>
            </View>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(MyAccountScreen);
