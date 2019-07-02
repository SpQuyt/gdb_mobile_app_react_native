import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import stateStorage from '../../config/stateStorage';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';

class ThankYouScreen extends Component {
  constructor(props) {
    super(props);
  }

  onContinueShopping = async () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <BackXButton />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Enable Notifications and we will inform you about:</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ColoredButton title='Continue Shopping' 
          method={this.onContinueShopping} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 15,
    height: stateStorage.SCREEN_HEIGHT * 0.6,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  buttonContainer: {
    padding: 10,
    height: stateStorage.SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
  },
})

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(ThankYouScreen);