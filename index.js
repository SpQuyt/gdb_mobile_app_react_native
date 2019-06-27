import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';
import HorizontalStepsScreen from './src/screens/HorizontalStepsScreen/HorizontalStepsScreen.js';
import LoginScreen from './src/screens/LoginScreen/LoginScreen.js';
import HomeScreen from './src/screens/HomeScreen/HomeScreen.js';
import { Provider } from 'react-redux';
import store from './src/store/store';

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
    HomeScreen: {
      screen: HomeScreen
    },
  },
  {
    // initialRouteName: 'HomeScreen',
    initialRouteName: 'HorizontalStepsScreen',
    // initialRouteName: 'LoginScreen',
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