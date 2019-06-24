import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class Steps extends Component {
  constructor(props) {
    super(props);
  }

  changeColor(index) {
    switch (index) {
      case 1:
        this.props.to1step(); this.props.disable2(); this.props.disable3(); this.props.disable4(); this.props.disable5(); 
        break;
      case 2:
        this.props.to2step(); this.props.enable2(); this.props.disable3(); this.props.disable4(); this.props.disable5();
        break;
      case 3:
        this.props.to3step(); this.props.enable2(); this.props.enable3(); this.props.disable4(); this.props.disable5();
        break;
      case 4:
        this.props.to4step(); this.props.enable2(); this.props.enable3(); this.props.enable4(); this.props.disable5();
        break;
      case 5:
        this.props.to5step(); this.props.enable2(); this.props.enable3(); this.props.enable4(); this.props.enable5();
        break;
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.step}
        onPress={() => {
          this.changeColor(this.props.index)
        }}
      >
        <View style={[styles.circle, {
          borderColor:
            this.props.index == 1 ? this.props.step1color
              : this.props.index == 2 ? this.props.step2color
                : this.props.index == 3 ? this.props.step3color
                  : this.props.index == 4 ? this.props.step4color
                    : this.props.step5color
        }]} />

        <Text style={[styles.title, {
          color:
            this.props.index == 1 ? this.props.step1color
              : this.props.index == 2 ? this.props.step2color
                : this.props.index == 3 ? this.props.step3color
                  : this.props.index == 4 ? this.props.step4color
                    : this.props.step5color
        }]}>
          {this.props.index == 1 ? 'Step 1.'
            : this.props.index == 2 ? 'Step 2.'
              : this.props.index == 3 ? 'Step 3.'
                : this.props.index == 4 ? 'Step 4.'
                  : 'Step 5.'}
        </Text>
      </TouchableOpacity>
    )
  }
}

Steps.propTypes = {
  index: PropTypes.number,
}
const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  step1color: state.step1color,
  step2color: state.step2color,
  step3color: state.step3color,
  step4color: state.step4color,
  step5color: state.step5color,
});

const styles = StyleSheet.create({
  step: {
    flexDirection: 'column',
    alignItems: 'center',
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
  },
})

export default connect(mapStateToProps, actions)(Steps);