import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

// import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me'],
  webClientId: '690731803269-gt8khpmlv90jkq8rdf8i8ds7744hf85s.apps.googleusercontent.com',
});

export default class LoginGoogleButton extends Component {
  // _getCurrentUser = async () => {
  //   //May be called eg. in the componentDidMount of your main component.
  //   //This method returns the current user
  //   //if they already signed in and null otherwise.
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // _signOut = async () => {
  //   //Remove user session from the device.
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     this.setState({ user: null }); // Remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // _revokeAccess = async () => {
  //   //Remove your application from the user authorized applications.
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     console.log('deleted');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  onLoginGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert(`${userInfo.user.name} login success!`)
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert(error.code)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert(error.code)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert(error.code)
      } else {
        alert(error)
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.fbggButton}
        onPress={this.onLoginGG}>
        <Image
          style={styles.ggIcon}
          source={require('../img/gg.png')} />
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
  ggIcon: {
    height: 25,
    width: 25,
  },
})