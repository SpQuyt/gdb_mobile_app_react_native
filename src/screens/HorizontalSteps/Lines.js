import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

//import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class Lines extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[styles.line, {
          borderColor:
            this.props.index == 1 ? this.props.stepsColor.step2
              : this.props.index == 2 ? this.props.stepsColor.step3
                : this.props.index == 3 ? this.props.stepsColor.step4
                  : this.props.stepsColor.step5
        }]}
      />
    )
  }
}

Lines.propTypes = {
  index: PropTypes.number,
}
const mapStateToProps = state => ({
  stepsColor: state.stepsColor,
});

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    height: 15,
    width: '25%',
  },
})

export default connect(mapStateToProps, actions)(Lines);