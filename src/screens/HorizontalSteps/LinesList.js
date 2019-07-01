import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Lines from './Lines';

export default class LinesList extends Component {

  render() {
    return (
      <View style={styles.containerLines}>
        {this.props.data.map((result) => {
            return <Lines
              index={result}
            />
          })
        }
      </View>
    )
  }
}

LinesList.propTypes = {
  data: PropTypes.array,
}

const styles = StyleSheet.create({
  containerLines: {
    height: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 0,
    padding: 0,
  },
})