import React, { Component } from 'react';
import { ImageBackground } from 'react-native';


import themeImages from '../Themes/Utils/Images'

import { Snackbar } from 'react-native-paper';

import {connect} from 'react-redux';

class ViewWithBackground extends Component {
  render() {
    return (
      <ImageBackground
          source={themeImages.background}
          style={{
            width: '100%',
            height: '100%'
          }}
          imageStyle={{
            resizeMode: 'contain' // works only here!
          }}
      >
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
      </ImageBackground>
    );
  }
}

const mapStateToProp = (state) => ({
  showAlert : state.Global.showAlert,
  AlertText : JSON.stringify( state.Global.axiosErrorData.data.error )
})

export default connect(mapStateToProp)(ViewWithBackground);