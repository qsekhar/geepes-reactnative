import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';

import {Text, TextInput, HelperText, Avatar, RadioButton} from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import {BlueButton, GreenButton} from '../Components/Utils';
import PhotoUpload from 'react-native-photo-upload'

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
      userAvatar :  <Avatar.Image size={150} source={themeImages.userAvatar} />,
      phone: '',
      zipcode: '',
      checked: 'first',
      date:"2016-05-15"
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
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];
    const { checked } = this.state;
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
              <PhotoUpload>
                {this.state.userAvatar}
              </PhotoUpload>
            </View>
          </View>
          
          <View style={MyAccountScreenStl.emailSection}>

            <View>
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

            <View style={MyAccountScreenStl.dropdownContainer}>
              <Dropdown
                style={MyAccountScreenStl.dropdown}
                label='Country'
                error='bla bla bla'
                data={data}
              />
            </View>
          </View>

          <View style={MyAccountScreenStl.middleSection}>
            <View style={MyAccountScreenStl.floatSection}>
              <View style={MyAccountScreenStl.inputfieldContainer}>
                <TextInput
                  style={MyAccountScreenStl.textInput}
                  label='Phone'
                  error={false}
                  mode='flat'
                  value={this.state.phone}
                  onChangeText={text => this.setState({ phone: text })}
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
            <View style={MyAccountScreenStl.floatSection}>
              <View style={MyAccountScreenStl.inputfieldContainer}>
                <TextInput
                  style={MyAccountScreenStl.textInput}
                  label='Zip Code'
                  error={false}
                  mode='flat'
                  value={this.state.zipcode}
                  onChangeText={text => this.setState({ zipcode: text })}
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
          </View>

          <View style={MyAccountScreenStl.middleSection}>
            <Text style={MyAccountScreenStl.radioText}>Gender</Text>
            <Text>        </Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'first' }); }}
            />
            <Text style={MyAccountScreenStl.radioText}>Male</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'second' }); }}
            />
            <Text style={MyAccountScreenStl.radioText}>Female</Text>

            <HelperText
              style={MyAccountScreenStl.radioText}
              type="error"
              visible={true}
            >
              bla bla bla
            </HelperText>
          </View>

          <View style={MyAccountScreenStl.birthday}>
            <View style={MyAccountScreenStl.radioText}>
              <Text>Birthday</Text>
            </View>
            <View style={{}}>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
              <HelperText
                style={MyAccountScreenStl.radioText}
                type="error"
                visible={true}
              >
                bla bla bla
              </HelperText>
            </View>
            

          </View>

          <View style={MyAccountScreenStl.middleSection}>
              <View style={MyAccountScreenStl.floatSection}>
                <Text style={{}}>39 Credit remaining, # of Geepes sent: 5</Text>
              </View>  
              <View style={MyAccountScreenStl.floatSection}>
                <BlueButton>Add Credits</BlueButton>
              </View>
          </View>

          <View style={MyAccountScreenStl.saveButtonCotainer}>
            <GreenButton>Save</GreenButton>
          </View>

          
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(MyAccountScreen);
