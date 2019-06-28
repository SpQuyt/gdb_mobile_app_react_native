import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../config/stateStorage';
import RegisterIconsContainer from '../components/RegisterIconsContainer';
import RegisterInputFormsContainer from '../components/RegisterInputFormsContainer';
import GoToLoginButton from '../components/GoToLoginButton';
import SignupButton from '../components/SignupButton';

export default class RegisterScreen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <RegisterIconsContainer />

          <RegisterInputFormsContainer />

          <SignupButton />
          <GoToLoginButton />
        </ScrollView>
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