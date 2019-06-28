import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';
import HorizontalStepsScreen from './src/screens/HorizontalStepsScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';
import { Provider } from 'react-redux';
import store from './src/store/store';
import ProfileScreen from './src/screens/ProfileScreen.js';

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    HorizontalStepsScreen: {
      screen: HorizontalStepsScreen
    },
    LoginScreen: {
      screen: LoginScreen
    },
    RegisterScreen: {
      screen: RegisterScreen
    },
    ProfileScreen: {
      screen: ProfileScreen
    },
  },
  {
    // initialRouteName: 'RegisterScreen',
    // initialRouteName: 'HorizontalStepsScreen',
    // initialRouteName: 'LoginScreen',
    initialRouteName: 'ProfileScreen',
    headerMode: 'none',
  }
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () => Root);