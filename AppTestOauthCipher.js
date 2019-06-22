/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CryptoJS from 'react-native-crypto-js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const consumer_key = "f62b7aefaf38026da8cf0b664e7e254f";
const access_token = "275f3514fec865dc3186fedb678a9433";
const consumer_secret = "9f6ed4ca684a0c10bbf4678c30ed56a4";
const token_secret = "d71d43cd90317ecc81c57e74c72e846c";
let timestamp = null;
const signature_method = "HMAC-SHA1";
const version = "1.0";
let nonce = null;
const signature = "t8T9DfNVrGihkmCBkdvH7ghRq2g%3D";
let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

export default class App extends Component {
  constructor(props) {
    super(props);
    state = {
      text: ""
    }
  }

  

  login() {
    timestamp = Date.now();
    // let headers = ;
    fetch('https://dev.goodiebox.dk/api/rest/integration/customer/token', {
      method: 'POST',
      headers: new Headers({
        // 'Authorization':
        //   'Oauth ' +
        //   `oauth_consumer_key="${consumer_key}",
        //   oauth_token="${access_token}",
        //   oauth_signature_method="${signature_method}",
        //   oauth_timestamp="${timestamp}",
        //   oauth_nonce="${nonce}",
        //   oauth_version="${version}",
        //   oauth_signature="${signature}"`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        username: 'test@test.com',
        password: '123456',
      }),

    })
      .then(result => {
        if (!result.ok) {
          console.log(result)
        }
        else {
          console.log(result);
        }
      })
      // .then(resultJSON => {
      //   console.log(resultJSON);
      // })
      .catch(err => {
        console.log(`ERROR: ${err}`);
      });
  }
  

  async getInfoCustomer() {
    timestamp = await new String(Date.now()).slice(0,10);
    nonce = CryptoJS.AES.encrypt(timestamp, 'truong anh quoc').toString().slice(0,11);
    fetch('https://dev.goodiebox.dk/api/rest/customer/me?token=bcc9e7eb15a5e54081fa7e6a260c30b4', {
      method: 'GET',
      headers: new Headers({
        Authorization:
          'Oauth ' +
          `oauth_consumer_key="${consumer_key}",
          oauth_token="${access_token}",
          oauth_signature_method="${signature_method}",
          oauth_timestamp="${timestamp}",
          oauth_nonce="${nonce}",
          oauth_version="${version}",
          oauth_signature="${signature}"`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(result => {
        if (!result.ok) {
          console.log(result)
        }
        else {
          console.log(result);
        }
      })
      // .then(resultJSON => {
      //   console.log(resultJSON);
      // })
      .catch(err => {
        console.log(`ERROR: ${err}`);
      });
  }

  async componentWillMount() {
    // this.login();
    await this.getInfoCustomer();
    console.log(`${timestamp} and ${nonce}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>NOTHING TO SHOW HERE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
