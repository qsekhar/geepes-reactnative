import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {List} from 'react-native-paper';

import MyAccountScreenStl from '../Themes/Styles/MyAccoutScreenStl'
import ViewWithBackground from '../Components/ViewWithBackground'
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
              title="My Account"
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Tutorial"
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Support / FAQ"
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="Redeem"
              left={() => <List.Icon icon="folder" />}
            />
            <List.Item
              title="About Us"
              left={() => <List.Icon icon="folder" />}
            />
          </List.Section>
        </ScrollView>
      </ViewWithBackground>
    );
  }
}

export default connect()(SettingsScreen);
