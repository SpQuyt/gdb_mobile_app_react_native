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

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import stateStorage from '../config/stateStorage';

export default class BasicInfo extends Component {
  render() {
    return (
      <View style={styles.basicInfoContainer}>
        {/* <Image source={} style={styles.avatar} /> */}
        <View style={styles.avatar} />
        <Text style={styles.name}>
          {this.props.name}
        </Text>
        <Text style={styles.email}>
          {this.props.email}
        </Text>
      </View>
    );
  }
}

BasicInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
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
    backgroundColor: 'grey',
  },
  name: {
    fontSize: 25,
  },
  email: {
    fontSize: 15,
  },
})                                                                