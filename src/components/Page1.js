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

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  async onNext() {
    await this.props.tonextstep();
    global.viewPager.goToPage(this.props.currentIndex);
    this.props.enable2();
    this.props.disable3();
    this.props.disable4();
    this.props.disable5();
  }

  render() {
    return (
      <View style={styles.pageList}>
        <View style={styles.content}>
          <Text style={styles.header}>THIS IS STEP 1.</Text>
          <Text style={styles.body}>Nothing much to say here.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={async () => {this.onNext()}}
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
    flexDirection: 'row-reverse',
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

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
});

export default connect(mapStateToProps, actions)(Page1);