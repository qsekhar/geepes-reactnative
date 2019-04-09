import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Appbar, Badge, TouchableRipple } from 'react-native-paper';

import NavigationService, {openDrawer} from '../../Navigation/NavigationService'
import Theme from '../../Themes/Theme'
import themeImages from '../../Themes/Utils/Images'

import {connect} from 'react-redux';
class AppbarHeader extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showHeader : true
    }
  }
  

  render() {
    return (
      <View>
        { (this.props.showDrawerHeader) ? 
        <Appbar.Header style={styles.hearderContainer}>
          <Appbar.Action
            icon="list"
            color={Theme.colors.primary}
            onPress={() => openDrawer()}
            style={styles.openDrawerAction}
          >
          </Appbar.Action>


          <TouchableRipple onPress={() => NavigationService.navigate('App')}>
            <Image source={themeImages.headerLogo} style={styles.headerLogo}/>
          </TouchableRipple>

          <View style={styles.mailSection}>
            <Badge
              style={styles.mailBadge}
              size={18}
            >23</Badge>
            <Appbar.Action
              icon="email"
              color={Theme.colors.primary}
              onPress={() =>  false}
              style={styles.openDrawerAction}
            >
            </Appbar.Action>
          </View>
          
        </Appbar.Header>
        : <View></View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hearderContainer : {
    backgroundColor: null,
    justifyContent: 'space-between',
  },
  headerLogo : {
    height: 30,
    width: 30
  },
  mailSection : { position: 'relative'},
  mailBadge : { position: 'absolute', top: 5, left: 1 , backgroundColor: Theme.colors.accent }
})

const mapStateToProps = (state) => ({
  showDrawerHeader: state.Global.showDrawerHeader
})

export default connect(mapStateToProps)(AppbarHeader);