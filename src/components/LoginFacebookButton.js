import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

//import Facebook Login
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export default class LoginFacebookButton extends Component {
  onLoginFB = async () => {
    try {
      let result = await LoginManager.logInWithPermissions(['public_profile']);
      if (result.isCancelled) {
        alert(`Login was cancelled!`);
      } else {
        alert(`Login was successful with permissions: ${result.grantedPermissions.toString()}`)
      }
    } catch (err) {
      alert(`Login failed with error: ${err}`);
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.fbggButton}
        onPress={this.onLoginFB}>
        <Image
          style={styles.fbIcon}
          source={require('../img/fb.png')} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  fbggButton: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    width: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  fbIcon: {
    height: 43,
    width: 43,
  },
})