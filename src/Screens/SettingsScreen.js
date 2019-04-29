import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {List} from 'react-native-paper';

import MyAccountScreenStl from '../Themes/Styles/MyAccoutScreenStl'
import ViewWithBackground from '../Components/ViewWithBackground'
import NavigationService from '../Navigation/NavigationService'

import { connect } from 'react-redux';

class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewWithBackground>
        <ScrollView>
          <List.Section>
            <List.Item
              onPress={() => NavigationService.navigate('MyAccount')}
              title="My Account"
              left={() => <List.Icon icon="account-circle" />}
            />
            <List.Item
              onPress={() => NavigationService.navigate('Tutorial')}
              title="Tutorial"
              left={() => <List.Icon icon="library-books" />}
            />
            <List.Item
              onPress={() => NavigationService.navigate('SupportFAQ')}
              title="Support / FAQ"
              left={() => <List.Icon icon="help" />}
            />
            <List.Item
              onPress={() => NavigationService.navigate('AboutUs')}
              title="About Us"
              left={() => <List.Icon icon="announcement" />}
            />
          </List.Section>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(SettingsScreen);
