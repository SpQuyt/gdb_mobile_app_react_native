import { AppRegistry, YellowBox } from 'react-native';
import React, { Component } from 'react';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';
import HorizontalStepsScreen from './src/screens/HorizontalStepsScreen/HorizontalStepsScreen.js';
import LoginScreen from './src/screens/LoginScreen/LoginScreen.js';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Step1Screen from './src/screens/HorizontalStepsScreen/Step1Screen.js';
import Step2Screen from './src/screens/HorizontalStepsScreen/Step2Screen.js';
import Step3Screen from './src/screens/HorizontalStepsScreen/Step3Screen.js';
import Step4Screen from './src/screens/HorizontalStepsScreen/Step4Screen.js';
import Step5Screen from './src/screens/HorizontalStepsScreen/Step5Screen.js';

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    HorizontalStepsScreen: {
      screen: HorizontalStepsScreen
    },
    Step1Screen: {
      screen: Step1Screen
    },
    Step2Screen: {
      screen: Step2Screen
    },
    Step3Screen: {
      screen: Step3Screen
    },
    Step4Screen: {
      screen: Step4Screen
    },
    Step5Screen: {
      screen: Step5Screen
    },
    LoginScreen: {
      screen: LoginScreen
    },
  },
  {
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