import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import CircleStepsList from './CircleStepsList';
import CircleSteps from './CircleSteps';
import stateStorage from '../config/stateStorage';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      data: [
        {
          color: 'yellow',
          index: 0
        },
        {
          color: 'grey',
          index: 1
        },
        {
          color: 'grey',
          index: 2
        },
        {
          color: 'grey',
          index: 3
        },
        {
          color: 'grey',
          index: 4
        } ],
    }
  }

  render() {
    return (
      <View
        style={styles.containerTimeline}>
        <View style={styles.containerLines}>
          <View
            style={[styles.line, { borderBottomColor: this.state.color }]}
          />
          <View
            style={[styles.line, { borderBottomColor: this.state.color }]}
          />
          <View
            style={[styles.line, { borderBottomColor: this.state.color }]}
          />
          <View
            style={[styles.line, { borderBottomColor: this.state.color }]}
          />
        </View>

        {<CircleStepsList data={this.state.data} />}

        <View style={styles.containerTitle}>
          <Text style={styles.title}>Step 1.</Text>
          <Text style={styles.title}>Step 2.</Text>
          <Text style={styles.title}>Step 3.</Text>
          <Text style={styles.title}>Step 4.</Text>
          <Text style={styles.title}>Step 5.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerTimeline: {
    margin: 15,
    flexDirection: 'column',
  },
  containerLines: {
    height: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 0,
    padding: 0,
  },
  containerCircles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 0,
    padding: 0,
  },
  containerTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
  },
  line: {
    borderBottomWidth: 2,
    height: 15,
    width: '25%',
  },
  circle: {
    borderRadius: 8,
    marginTop: -13,
    width: 20,
    height: 20,
    borderWidth: 13,
  },
  title: {
    fontSize: 10,
  }
})