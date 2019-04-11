import React, { Component } from 'react';
import { View } from 'react-native';

import ViewWithBackground from '../Components/ViewWithBackground'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Inbox from '../Containers/Inbox'
import Outbox from '../Containers/Outbox'

import Theme from '../Themes/Theme'

import {connect} from 'react-redux';

class GeepesMailboxScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'inbox', title: 'Inbox' },
        { key: 'outbox', title: 'Outbox' }
      ],
    };
  }

  render() {
    return (
      <ViewWithBackground withMailBoxHeader={true}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            inbox: Inbox,
            outbox: Outbox
          })}
          onIndexChange={index => this.setState({ index })}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{ backgroundColor: Theme.colors.accent }}
            />
          }
        />
      </ViewWithBackground>
    );
  }
}

export default connect()(GeepesMailboxScreen)