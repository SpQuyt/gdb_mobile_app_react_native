import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';

export default class SignupButton extends Component {
  onSignup = async () => {

  }

  render() {
    return (
      <View style={styles.signupButtonsContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={this.onSignup}
        >
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'white',
    textAlign: 'center'
  },
  signupButtonsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  signupButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})