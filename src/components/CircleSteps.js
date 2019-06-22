import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

//import redux
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class CircleSteps extends Component {

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.2}
        style={[styles.circle, { borderColor: this.props.color }]}
        onPress={() => {
          this.props.counterIncrease();
        }}
      />
    )
  }
}

CircleSteps.propTypes = {
  index: PropTypes.number,
  color: PropTypes.string,
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 8,
    marginTop: -13,
    width: 20,
    height: 20,
    borderWidth: 13,
  },
})

export default connect(null, actions)(CircleSteps);