import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, TextInput, HelperText } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import {GreenButton} from '../Components/Utils'

import ViewWithBackground from '../Components/ViewWithBackground';
import CreditScreenStl from '../Themes/Styles/CreditScreenStl';
import SignupScreenStl from '../Themes/Styles/SignupScreenStl'

import Theme from '../Themes/Theme'
import {connect} from 'react-redux';

class ReedemScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reedem : ''
    }
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
        <ScrollView>
          <View style={CreditScreenStl.creditRemaining}>
            <Text style={CreditScreenStl.greenHeadline}>39</Text>
            <Text>Credits Remaining</Text>
          </View>

          <View style={CreditScreenStl.container}>
            <View style={SignupScreenStl.textInputContainer}>
              <Icon style={SignupScreenStl.TextIcon} name="tags" size={20}/>
              <TextInput
                label='Reedem Code'
                error={true}
                mode='flat'
                value={this.state.reedem}
                onChangeText={text => this.setState({ reedem: text })}
                //onFocus={() => this.props.dispatch({type:'REMOVE_LOGIN_ERROR'})}
                style={SignupScreenStl.textInput}
              />
              <HelperText
                style={SignupScreenStl.helperText}
                type="error"
                //visible={userLoginError.email != ''}
              >
                asd
              </HelperText>
            </View>

            <View style={CreditScreenStl.redemBtn}> 
              <GreenButton>Reedem</GreenButton>
            </View>
          </View>

        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(ReedemScreen);