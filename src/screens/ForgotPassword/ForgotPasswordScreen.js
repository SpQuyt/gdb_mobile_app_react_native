import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import InputEmail from '../../components/InputEmail';
import ResetPasswordButton from './ResetPasswordButton';
import ForgotIconsContainer from './ForgotIconsContainer';
import BackXButton from '../../components/BackXButton';

export default class ForgotPasswordScreen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <BackXButton/>
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: 25, color: 'black' }]}>Forgot your password?</Text>
            <Text style={styles.text}>Enter your email below to receive your password reset instructions.</Text>
          </View>

          <View style={styles.body}>
            <InputEmail />
            <ResetPasswordButton />
            <ForgotIconsContainer />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  textContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: stateStorage.fontsize,
    marginVertical: 8,
    color: 'grey',
  },
  body: {
    height: stateStorage.SCREEN_HEIGHT * 0.7,
    justifyContent: 'flex-start',
    padding: 10,
  }
})                                                                