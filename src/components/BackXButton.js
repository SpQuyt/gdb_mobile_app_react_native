import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BackXButton extends Component {
  onBack = () => {

  }

  render() {
    return (
      Platform.OS == 'android'
        ? <View />
        : <View style={styles.backXButtonContainer}>
          <TouchableOpacity onPress={this.onBack}>
            <Ionicons name='ios-close' size={25} />
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  backXButtonContainer: {
    paddingHorizontal: 18,
    paddingTop: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },
})                                                        