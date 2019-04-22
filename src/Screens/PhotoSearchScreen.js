import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import SearchWithLocation from '../Containers/SearchWithLocation'
import PhotoSearchByCategory from '../Containers/PhotoSearchByCategory'

import {connect} from 'react-redux';

/*
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'none' }]} />
);
*/


import ViewWithBackground from '../Components/ViewWithBackground'
class PhotoSearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewWithBackground>
        <TabView
          navigationState={this.props.HomeUpperTabs}
          renderScene={SceneMap({
            location: SearchWithLocation,
            category: PhotoSearchByCategory,
            //tag: ThirdRoute,
          })}
          onIndexChange={index => this.props.dispatch({ type : 'CHANGE_HOME_UPPER_TAB', payload : index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </ViewWithBackground>
    );
  }
}

const mapStateToProps = state => ({
  HomeUpperTabs : state.HomeUpperTabs
})

export default connect(mapStateToProps)(PhotoSearchScreen);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
