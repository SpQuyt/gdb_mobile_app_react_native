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
import styles from './styles';
import Timeline from '../../components/Timeline';
import stateStorage from '../../config/stateStorage';
//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class HorizontalStepsScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderNumber() {
    return (
      <View>
        <Text>{this.props.counter}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline />

        {this.renderNumber()}
        {/* <TouchableOpacity
          onPress={() => { }}
          style={styles.button}
        >
          <Text>NHAU NHAU</Text>
        </TouchableOpacity> */}
      </View>

    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, actions)(HorizontalStepsScreen);