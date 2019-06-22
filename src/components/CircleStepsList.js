import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CircleSteps from './CircleSteps';

export default class CircleStepsList extends Component {

  render() {
    return (
      <View style={styles.containerCircles}>
        {this.props.data.map((result) => {
            return <CircleSteps
              index={result.index}
              color={result.color}
            />
          })
          
          // () => {
          // for (let i = 0; i < this.props.quantity; i++) {
          //   return (
          //     <CircleSteps key={i} color={grey}/>
          //   )
          // }
        }
      </View>
    )
  }
}

CircleStepsList.propTypes = {
  data: PropTypes.array,
  // quantity: PropTypes.number,
}

const styles = StyleSheet.create({
  containerCircles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 0,
    padding: 0,
  },
})