import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import ViewPager from './ViewPager';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class PagesListNavigator extends Component {
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
      <ViewPager
        ref={(viewPager) => {
          global.viewPager = viewPager;
        }}
        initialPage={this.props.currentIndex - 1}
        onChangePage={(page) => {
          this.changeColor(page + 1);
        }}
      >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </ViewPager>
    )
  }
}

PagesListNavigator.propTypes = {
  currentPage: PropTypes.number,
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
  step1color: state.step1color,
  step2color: state.step2color,
  step3color: state.step3color,
  step4color: state.step4color,
  step5color: state.step5color,
})

export default connect(mapStateToProps, actions)(PagesListNavigator);