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

  async changeColor(index) {
    switch (index) {
      case 1:
        await this.props.to1step(); this.props.enable1(); 
        break;
      case 2:
        await this.props.to2step(); this.props.enable2();
        break;
      case 3:
        await this.props.to3step(); this.props.enable3();
        break;
      case 4:
        await this.props.to4step(); this.props.enable4();
        break;
      case 5:
        await this.props.to5step(); this.props.enable5();
        break;
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.step}
        onPress={() => {
          this.changeColor(this.props.index);
          global.viewPager.goToPage(this.props.index-1);
        }}
      >
        <View style={[styles.circle, {
          borderColor:
            this.props.index == 1 ? this.props.stepsColor.step1
              : this.props.index == 2 ? this.props.stepsColor.step2
                : this.props.index == 3 ? this.props.stepsColor.step3
                  : this.props.index == 4 ? this.props.stepsColor.step4
                    : this.props.stepsColor.step5
        }]} />

        <Text style={[styles.title, {
          color:
            this.props.index == 1 ? this.props.stepsColor.step1
              : this.props.index == 2 ? this.props.stepsColor.step2
                : this.props.index == 3 ? this.props.stepsColor.step3
                  : this.props.index == 4 ? this.props.stepsColor.step4
                    : this.props.stepsColor.step5
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
  stepsColor: state.stepsColor,
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