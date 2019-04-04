import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Drawer, Avatar, Headline, Subheading, Divider , Surface } from 'react-native-paper';

import LinearGradient from "react-native-linear-gradient";
import {BoxShadow} from 'react-native-shadow'

import themeImages from '../Themes/Utils/Images';
import Theme from '../Themes/Theme'

import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAvatar :  <Avatar.Image size={76} source={themeImages.userAvatar} />
    };

    AsyncStorage.getItem('auth_token').then(token => {
      const userAvatar = themeImages.userAvatar;
      userAvatar.uri = userAvatar.uri + token;
      this.setState({ userAvatar: <Avatar.Image size={76} source={userAvatar} /> } )
    })
  }

  navigateToScreen = ( route ) => {
    this.props.navigation.navigate(route);
  }

  render() {
    const {items, activeItemKey, name, email} = this.props;

    return (
      <LinearGradient
        colors={[
          "#aae6fd",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ]}
        style={styles.container}
      >
        <View style={styles.userDetailsSection}>
            <Surface style={styles.surface}>
            {this.state.userAvatar}
            </Surface>
          
          <Headline style={styles.headline}>{name}</Headline>
          <Subheading style={styles.subheading}>{email}</Subheading>
        </View>
        <Divider />
        <View style={styles.navSection}>
          <Drawer.Section>
            {items.map((item, index) =>
              <Drawer.Item
                key={index}
                icon={item.params.icon}
                label={item.params.name}
                active={item.routeName === activeItemKey}
                onPress={() => { this.navigateToScreen(item.routeName) }}
                style={styles.drawerItems}
              />
            )}
          </Drawer.Section>
        </View>
        
        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aae6fd"
  },
  userDetailsSection: {
    //flex: 1,
    marginTop: Theme.padding.md,
    paddingHorizontal: Theme.padding.md,
  },
  navSection: {
    //flex: 3
    marginTop: Theme.padding.sm,
    paddingHorizontal: Theme.padding.sm,
  },
  headline: {
    color: Theme.colors.primary,
    marginTop: Theme.padding.sm,
  },
  subheading: {
    fontSize: 16,
    marginBottom: Theme.padding.sm,
  },
  avatar : {
    marginTop: Theme.padding.sm,
  },
  surface: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
  },
  drawerItems: {
  }
});

mapStateToProps = state => ({
  name : state.Auth.userDetails.user.first_name,
  email : state.Auth.userDetails.user.email
})

export default connect(mapStateToProps)(Sidebar);
