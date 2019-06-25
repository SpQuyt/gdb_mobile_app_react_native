import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  AsyncStorage,
  StyleSheet
} from 'react-native';
//import Facebook Login
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: 0,
      userInfo: '',
    }
  }

  // componentDidMount() {
  //   GoogleSignin.configure({
  //     //It is mandatory to call this method before attempting to call signIn()
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     // Repleace with your webClientId generated from Firebase console
  //     webClientId:
  //       '690731803269-jbi03h5j1upr03vlm7equsmo4tppg467.apps.googleusercontent.com',
  //   });
  // }

  // onLoginFB = async () => {
  //   try {
  //     let result = await LoginManager.logInWithPermissions(['public_profile']);
  //     if (result.isCancelled) {
  //       alert(`Login was cancelled!`);
  //     } else {
  //       alert(`Login was successful with permissions: ${result.grantedPermissions.toString()}`)
  //     }
  //   } catch (err) {
  //     alert(`Login failed with error: ${err}`);
  //   } finally {
  //     console.log(result)
  //   }
  // }

  // onLoginGG = async () => {
  //   //Prompts a modal to let the user sign in into your application.
  //   try {
  //     await GoogleSignin.hasPlayServices({
  //       //Check if device has Google Play Services installed.
  //       //Always resolves to true on iOS.
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('User Info --> ', userInfo);
  //     this.setState({ userInfo: userInfo });
  //   } catch (error) {
  //     console.log('Message', error.message);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('User Cancelled the Login Flow');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Signing In');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Play Services Not Available or Outdated');
  //     } else {
  //       console.log('Some Other Error Happened');
  //     }
  //   }
  // }

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

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              console.log(result);
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    alert(result)
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
        {/* <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.onLoginGG}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});