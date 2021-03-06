import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'none' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'none' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'none' }]} />
);


import ViewWithBackground from '../Components/ViewWithBackground'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'location', title: 'Location' },
        { key: 'category', title: 'Category' },
        { key: 'tag', title: 'Tag' },
      ],
    };
  }

  render() {
    return (
      <ViewWithBackground>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            location: FirstRoute,
            category: SecondRoute,
            tag: ThirdRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </ViewWithBackground>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
