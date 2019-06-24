import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Page2 extends Component {
  constructor(props) {
    super(props);
  }

  async onBack() {
    await this.props.tobackstep();
    this.props.disable2();
    this.props.disable3();
    this.props.disable4();
    this.props.disable5();
  }

  async onNext() {
    await this.props.tonextstep();
    this.props.enable2();
    this.props.enable3();
    this.props.disable4();
    this.props.disable5();
  }

  render() {
    return (
      <View style={styles.pageList}>
        <View style={styles.content}>
          <Text style={styles.header}>THIS IS STEP 2.</Text>
          <Text style={styles.body}>You belong with me.</Text>
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            onPress={() => {this.onBack()}}
            style={styles.nextButton}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this.onNext()}}
            style={styles.backButton}>
            <Text>Next</Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageList: {
    flex: 1,
    borderWidth: 1,
    margin: 15,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  body: {

  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  nextButton: {
    padding: 5,
    // backgroundColor: 'brown',
  },
  backButton: {
    padding: 5,
    // backgroundColor: 'grey',
  },
})

export default connect(null, actions)(Page2);