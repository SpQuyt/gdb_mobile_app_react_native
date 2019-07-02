import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

import OnboardingScreen from './src/screens/Onboarding';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ProfileScreen from './src/screens/Profile';
import ForgotPasswordScreen from './src/screens/ForgotPassword';
import VerifyMobileScreen from './src/screens/VerifyMobile';
import NotificationScreen from './src/screens/Notification';
import ThankYouScreen from './src/screens/ThankYou';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

const AppNavigator = createStackNavigator(
  {
    OnboardingScreen: {
      screen: OnboardingScreen
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
    NotificationScreen: {
      screen: NotificationScreen
    },
    ThankYouScreen: {
      screen: ThankYouScreen
    },
  },
  {
    // initialRouteName: 'RegisterScreen',
    // initialRouteName: 'OnboardingScreen',
    // initialRouteName: 'NotificationScreen',
    // initialRouteName: 'ThankYouScreen',
    initialRouteName: 'LoginScreen',
    // initialRouteName: 'ProfileScreen',
    // initialRouteName: 'ForgotPasswordScreen',
    // initialRouteName: 'VerifyMobileScreen',
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