import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
//import Facebook Login
import {LoginManager} from 'react-native-fbsdk';
// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: "690731803269-vin8ljkifio6n2gc2rdjb866b5d4v2bi.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: 0,
    }
  }

  onSaveToken = async (token, user_id) => {
    try {
      await AsyncStorage.setItem('myToken', token);
      await AsyncStorage.setItem('myUserId', user_id);
    } catch (error) {
      // Error saving data
    }
  }

  onLoginFB = async () => {
    try {
      let result = await LoginManager.logInWithPermissions(['public_profile']);
      console.log(result);
      if (result.isCancelled) {
        alert(`Login was cancelled!`);
      } else {
        alert(`Login was successful with permissions: ${result.grantedPermissions.toString()}`)
      }
    } catch (err) {
      alert(`Login failed with error: ${err}`);
    }
  }

  onLoginGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert(error.code)
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert(error.code)
        // play services not available or outdated
      } else {
        alert(error.code)
        // some other error happened
      }
    }
  }

  onLogin = () => {
    this.setState({ loading: 1 });
    if (this.state.username == '') {
      alert("Ô tên người dùng đang để trống!");
      this.setState({ loading: 0 });
    }
    else if (this.state.password == '') {
      alert("Ô mật khẩu đang để trống!");
      this.setState({ loading: 0 });
    }
    else {
      loginAPI(this.state.username, this.state.password)
      // loginAPI('Aq', 'Aq')
        .then((res) => res.json())
        .then((resJSON) => {
          if (resJSON.success === true) {
            this.props.navigation.navigate('Home', {
              user_id: resJSON.user_id,
              user_name: this.state.username,
            });
            this.onSaveToken(resJSON.token,resJSON.user_id)
          }
          else {
            alert("Sai mật khẩu hoặc tên người dùng!");
          }
          this.setState({ loading: 0 });
        })
        .catch(err => {
          alert("Kiểm tra lại kết nối hoặc khởi động lại app!")
          this.setState({ loading: 0 });
        })
    }
  }

  renderLoading() {
    if (this.state.loading === 0) {
      return (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onLogin}
          >
            <Text style={styles.text}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else if (this.state.loading === 1) {
      return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#fb3" />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.container_img}>
          <Image
            style={styles.head_image}
            source={require("../../../img/Easy-Event.png")} />
        </View>

        <View style={styles.form}>
          <View style={styles.form_input}>
            <TextInput
              placeholder="Tên người dùng..."
              onChangeText={(username) => this.setState({ username })}
            />
          </View>

          <View style={styles.form_input}>
            <TextInput
              placeholder="Mật khẩu..."
              onChangeText={(password) => this.setState({ password })}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.button_container}>
          {this.renderLoading()}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "transparent" }]}
            onPress={this.onLoginFB}
          >
            <Text style={{color: "black",}}>Login via Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "transparent" }]}
            onPress={this.onLoginGG}
          >
            <Text style={{color: "black",}}>Login via Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}