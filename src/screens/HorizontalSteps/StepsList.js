import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Steps from './Steps';

export default class StepsList extends Component {

  render() {
    return (
      <View style={styles.containerSteps}>
        {this.props.data.map((result) => {
            return <Steps
              index={result}
            />
          })
        }
      </View>
    )
  }
}

StepsList.propTypes = {
  data: PropTypes.array,
}

const styles = StyleSheet.create({
  containerSteps: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: -5,
    marginVertical: 0,
    padding: 0,
  },
})