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
import PagesListNavigator from '../../components/PagesListNavigator';

class HorizontalStepsScreen extends Component {
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
        <PagesListNavigator currentPage={this.props.currentIndex}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
})

export default connect(mapStateToProps, actions)(HorizontalStepsScreen);