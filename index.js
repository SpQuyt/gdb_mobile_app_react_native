import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';
import HorizontalStepsScreen from './src/screens/HorizontalSteps/HorizontalStepsScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import RegisterScreen from './src/screens/Register/RegisterScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import ForgotPasswordScreen from './src/screens/ForgotPassword/ForgotPasswordScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import VerifyMobileScreen from './src/screens/VerifyMobile/VerifyMobileScreen.js';

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
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen
    },
    VerifyMobileScreen: {
      screen: VerifyMobileScreen
    },
  },
  {
    // initialRouteName: 'RegisterScreen',
    // initialRouteName: 'HorizontalStepsScreen',
    // initialRouteName: 'LoginScreen',
    // initialRouteName: 'ProfileScreen',
    // initialRouteName: 'ForgotPasswordScreen',
    initialRouteName: 'VerifyMobileScreen',
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