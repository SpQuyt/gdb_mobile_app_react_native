import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../config/stateStorage';
import LoginButton from '../components/LoginButton';
import ForgotPasswordButton from '../components/ForgotPasswordButton';
import GoToRegisterButton from '../components/GoToRegisterButton';
import LoginIconsContainer from '../components/LoginIconsContainer';
import LoginInputFormsContainer from '../components/LoginInputFormsContainer';

export default class LoginScreen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="position" enabled
          keyboardVerticalOffset={-90}
        >
          <LoginIconsContainer />

          <LoginInputFormsContainer />

          <LoginButton />
          <ForgotPasswordButton />
          <GoToRegisterButton />

        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
})                                                                