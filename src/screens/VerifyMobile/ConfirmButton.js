import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import stateStorage from '../../config/stateStorage';

class ConfirmButton extends Component {
  onConfirm = async () => {

  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={this.onConfirm}>
          <Text style={styles.text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  confirmButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  text: {
    fontSize: stateStorage.fontsize,
    color: 'white',
    textAlign: 'center'
  },
})

export default withNavigation(ConfirmButton);