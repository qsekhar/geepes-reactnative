import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Subheading, List } from 'react-native-paper'
import {GreenButton, BlueButton} from '../Components/Utils'

import ViewWithBackground from '../Components/ViewWithBackground';
import CreditScreenStl from '../Themes/Styles/CreditScreenStl';

import Theme from '../Themes/Theme'
import {connect} from 'react-redux';

const BuyList = () => (
  <List.Item
    title="4 Credits"
    description="$ 0.99"
    descriptionStyle={CreditScreenStl.descriptionStyle}
    left={props => <List.Icon {...props} color={Theme.colors.primary} icon="attach-money" />}
    right={props => <GreenButton style={CreditScreenStl.buyBtn}>Buy</GreenButton>}
  />
);

class ReedemScreen extends Component {

  constructor(props) {
    super(props)
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
          <Text>asd</Text>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(ReedemScreen);