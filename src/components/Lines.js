import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

//import redux
import * as actions from '../actions/index';
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
            this.props.index == 1 ? this.props.step2color
              : this.props.index == 2 ? this.props.step3color
                : this.props.index == 3 ? this.props.step4color
                  : this.props.step5color
        }]}
      />
    )
  }
}

Lines.propTypes = {
  index: PropTypes.number,
}
const mapStateToProps = state => ({
  step2color: state.step2color,
  step3color: state.step3color,
  step4color: state.step4color,
  step5color: state.step5color,
});

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 2,
    height: 15,
    width: '25%',
  },
})

export default connect(mapStateToProps, actions)(Lines);