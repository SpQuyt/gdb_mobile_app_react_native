import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from './styles';
//import redux
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

export default class StoryPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: 'green',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              height: 10,
              width: 60,
              backgroundColor: 'white',
              position: 'absolute',
              left: -3,
            }}
          />
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 45,
              backgroundColor: 'grey',
              left: 2,
            }}
          ></View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

// export default connect(mapStateToProps, actions)(HorizontalStepsScreen);