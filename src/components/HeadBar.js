import React, { Component } from 'react';
import {
  View,
  StyleSheet,
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

export default class HeadBar extends Component {
  onBack = () => {

  }

  onNavigationList = () => {

  }

  render() {
    return (
      <View style={styles.headBarContainer}>
        <View style={styles.leftIcons}>
          <TouchableOpacity
            onPress={this.onBack}
            style={styles.icon}>
            <Ionicons
              name="ios-arrow-back"
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onNavigationList}
            style={styles.icon}>
            <Foundation
              name="list"
              size={20}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity
            onPress={this.onBack}
            style={styles.icon}>
            <Ionicons
              name="md-heart-empty"
              size={20}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onBack}
            style={styles.icon}>
            <SimpleLineIcons
              name="bag"
              size={16}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

HeadBar.propTypes = {
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  headBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: stateStorage.SCREEN_HEIGHT * 0.08,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  leftIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 6,
    padding: 8,
  },
  title: {
    fontSize: 25,
    marginHorizontal: 10,
  },
})                                                                