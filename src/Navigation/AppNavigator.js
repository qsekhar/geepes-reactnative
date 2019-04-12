import { 
  createAppContainer, 
  createStackNavigator, 
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator } from "react-navigation";

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../Themes/Theme'

import Sidebar from '../Components/Sidebar'

import AuthLoadingScreen from '../Screens/AuthLoadingScreen'
import HomeScreen from '../Screens/HomeScreen'
import LandingScreen from '../Screens/LandingScreen'
import LoginAndSignupScreen from '../Screens/LoginAndSignupScreen'
import LoginScreen from '../Screens/LoginScreen'
import SingupScreen from '../Screens/SingupScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import GeepesMailboxScreen from '../Screens/GeepesMailboxScreen'
import MailDetailsScreen from '../Screens/MailDetailsScreen'
import MyAccountScreen from '../Screens/MyAccountScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import PhotoSearchScreen from '../Screens/PhotoSearchScreen'
import VideoSearchScreen from '../Screens/VideoSearchScreen'

import {View, TouchableRipple, Button} from 'react-native-paper'
import themeImage from '../Themes/Utils/Images'




const HomeBottomStack = createBottomTabNavigator(
  {
    Photo : PhotoSearchScreen,
    Video : VideoSearchScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        
        const { routeName } = navigation.state;
        
        let IconComponent = Ionicons;
        let iconName;
        
        if (routeName === 'Photo') {
          iconName = `ios-camera`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Video') {
          iconName = `ios-videocam`;
        }
        
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Theme.colors.orange,
      inactiveTintColor: Theme.colors.placeholder,
    },
  }
);

const SettingsStack = createStackNavigator({
  Settings : SettingsScreen,
  MyAccount : MyAccountScreen
},{
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitleStyle: {
      fontWeight: 'normal',
    }
  }
});

const MailboxStack = createStackNavigator({
  GeepesMailbox : GeepesMailboxScreen,
  MailDetails : MailDetailsScreen
},{
  defaultNavigationOptions: {
    headerTransparent: true,
    headerTitleStyle: {
      fontWeight: 'normal',
    }
  }
});

const AppStack = createDrawerNavigator(
  { 
    Home: {
      screen: HomeBottomStack,
      params: {
        name: 'Home',
        icon: 'home'
      }
    },
    GeepesMailbox: {
      screen: MailboxStack,
      params: {
        name: 'Geepes Mailbox',
        icon: 'email'
      }
    },
    Settings: {
      screen: SettingsStack,
      params: {
        name: 'Settings',
        icon: 'settings'
      }
    }
  },
  {
    contentComponent: Sidebar
  }
);

const AuthStack = createStackNavigator(
  { 
    Landing: LandingScreen,
    LoginAndSignup: LoginAndSignupScreen,
    Login: LoginScreen,
    Signup: SingupScreen,
    ForgotPassword: ForgotPasswordScreen
  }, 
  {
    
    defaultNavigationOptions: {
      
      headerTransparent: true,
      headerTintColor: Theme.colors.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
});


const AppContainer = createAppContainer(RootNavigator);

export default AppContainer;