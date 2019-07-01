import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import LinesList from './LinesList';
import StepsList from './StepsList';
//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexStep: [1, 2, 3, 4, 5],
      indexLine: [1, 2, 3, 4],
    }
  }

  render() {
    return (
      <View style={styles.containerTimeline}>
        <LinesList data={this.state.indexLine} />
        <StepsList data={this.state.indexStep}/>
      </View>
    )
  }
}

Timeline.propTypes = {
  indexLine: PropTypes.array,
  indexStep: PropTypes.array,
}

const styles = StyleSheet.create({
  containerTimeline: {
    margin: 15,
    flexDirection: 'column',
  },
  containerTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
  },
})

export default connect(null, actions)(Timeline);