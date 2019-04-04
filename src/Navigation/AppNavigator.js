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
import GeepesMailboxScreen from '../Screens/GeepesMailboxScreen'

import PhotoSearchScreen from '../Screens/PhotoSearchScreen'
import VideoSearchScreen from '../Screens/VideoSearchScreen'




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
      screen: GeepesMailboxScreen,
      params: {
        name: 'Geepes Mailbox',
        icon: 'email'
      }
    }
  },
  {
    contentComponent: Sidebar
  }
);
const AuthStack = createStackNavigator(
  { Landing: LandingScreen }, 
  {
    headerMode: 'none',
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