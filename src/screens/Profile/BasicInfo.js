import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import stateStorage from '../../config/stateStorage';

export default class BasicInfo extends Component {
  render() {
    return (
      <View style={styles.basicInfoContainer}>
        <Image source={{ uri: stateStorage.user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>
          {stateStorage.user.name}
        </Text>
        <Text style={styles.email}>
          {stateStorage.user.email}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  basicInfoContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.25,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stateStorage.backgroundColor,
  },
  avatar: {
    height: stateStorage.SCREEN_HEIGHT * 0.15,
    width: stateStorage.SCREEN_HEIGHT * 0.15,
    borderRadius: 80,
    borderWidth: 1,
    // backgroundColor: 'grey',
  },
  name: {
    fontSize: 25,
  },
  email: {
    fontSize: 15,
  },
})                                                                