import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import RegisterIconsContainer from './RegisterIconsContainer';
import RegisterInputFormsContainer from './RegisterInputFormsContainer';
import GoToLoginButton from './GoToLoginButton';
import SignupButton from './SignupButton';
import BackXButton from '../../components/BackXButton';

export default class RegisterScreen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <BackXButton />
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