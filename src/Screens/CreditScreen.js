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

class CreditScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewWithBackground>
        <ScrollView>
          <View style={CreditScreenStl.creditRemaining}>
            <Text style={CreditScreenStl.greenHeadline}>39</Text>
            <Text>Credits Remaining</Text>
          </View>
          <View style={CreditScreenStl.container}>
            <Subheading>Buy more now:</Subheading>
          </View>
          <List.Section style={CreditScreenStl.rightPaddingContainer}>
            <BuyList />
            <BuyList />
            <BuyList />
            <BuyList />
          </List.Section>
          <View style={CreditScreenStl.creditNeva}>
            <Text>Credit never expire</Text>
          </View>
          <View style={CreditScreenStl.container}>
            <GreenButton
              onPress={() => this.props.navigation.navigate('Reedem')}
            >Redeem Promo code</GreenButton>
          </View>
          <View style={CreditScreenStl.problemContainer}>
            <BlueButton>Problem?</BlueButton>
            <BlueButton>Support</BlueButton>
          </View>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(CreditScreen);