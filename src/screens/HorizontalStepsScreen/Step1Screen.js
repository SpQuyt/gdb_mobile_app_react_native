import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Timeline from '../../components/Timeline';
//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Page1 from '../../components/Page1';

class Step1Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexStep: [1, 2, 3, 4, 5],
      indexLine: [1, 2, 3, 4],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline indexLine={this.state.indexLine} indexStep={this.state.indexStep} />
        <Page1/>
      </View>

    )
  }
}

export default connect(null, actions)(Step1Screen);