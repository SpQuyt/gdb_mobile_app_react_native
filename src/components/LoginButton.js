import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../config/stateStorage';

export default class LoginButton extends Component {
  onLogin = async () => {

  }

  render() {
    return (
      <View style={styles.loginButtonsContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.onLogin}
        >
          <Text style={styles.text}>Login</Text>
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
  loginButtonsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  loginButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})