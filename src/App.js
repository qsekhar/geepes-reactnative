/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { Provider as PaperProvider } from 'react-native-paper';
import theme from './Themes/Theme'

import { Provider as StoreProvider } from 'react-redux';
import store from './StoreManager/Store';

import { ReduxNetworkProvider } from 'react-native-offline';

import AppContainer from './Navigation/AppNavigator';
import NavigationService from './Navigation/NavigationService'

import { useScreens } from 'react-native-screens';
useScreens();

export default class App extends Component {
  render = () => (
    <StoreProvider store={store}>
      <ReduxNetworkProvider>
        <PaperProvider theme={theme}>
          <AppContainer 
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </PaperProvider>
      </ReduxNetworkProvider>      
    </StoreProvider>
  )
}


