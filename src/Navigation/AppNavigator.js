import { 
  createAppContainer, 
  createStackNavigator, 
  createSwitchNavigator, 
  createDrawerNavigator, 
  createBottomTabNavigator } from "react-navigation";

  import AuthLoadingScreen from '../Screens/AuthLoadingScreen'
  import HomeScreen from '../Screens/HomeScreen'
  import LandingScreen from '../Screens/LandingScreen'



const AppStack = createDrawerNavigator(
  { Home: HomeScreen }
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