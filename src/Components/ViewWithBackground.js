import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import themeImages from '../Themes/Utils/Images'
import Theme from '../Themes/Theme'
import { Snackbar, Surface, Text } from 'react-native-paper';
import AppbarHeader from '../Containers/Utils/AppbarHeader'

import {connect} from 'react-redux';



class ViewWithBackground extends Component {
  render() {
    const offlineNotice = !this.props.isConnected ? <Surface style={styles.surface}>
                            <Text style={styles.offLineText}>You are offline, Please try to reconnect</Text>
                          </Surface> : <Text style={styles.nullText}>''</Text>;
                  
    return (
      <ImageBackground
          source={themeImages.background}
          style={{
            width: '100%',
            height: '100%',
            //paddingTop: this.props.withTraparentHeader ? 55 : 0
          }}
          imageStyle={{
            resizeMode: 'cover' 
          }}
      >
        <AppbarHeader />
        <View style={{paddingTop: this.props.withTraparentHeader ? 55 : 0, flex:1}}>
          {offlineNotice}
          <Snackbar
            visible={this.props.showAlert}
            onDismiss={() => this.props.dispatch({type:'HIDE_GLOBAL_ALERT'})}
            action={{
              label: 'Ok',
              onPress: () => {
                this.props.dispatch({type:'HIDE_GLOBAL_ALERT'})
              },
            }}
          >
            {this.props.AlertText}
          </Snackbar>

          {this.props.children}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
    backgroundColor : Theme.colors.error
  },
  offLineText:{
    color: '#ECECEC'
  },
  nullText: {
    height:0,
    width:0,
    padding:0
  }
});

const mapStateToProp = (state) => ({
  showAlert : state.Global.showAlert,
  AlertText : JSON.stringify(state.Global.axiosErrorData.data.error),
  isConnected : state.network.isConnected
})

export default connect(mapStateToProp)(ViewWithBackground);

//state.Global.axiosErrorData.data.error.map(item, index => `${index} : ${item}`)