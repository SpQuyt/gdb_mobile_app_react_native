import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import ViewPager from './ViewPager';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class PagesListNavigator extends Component {
  constructor(props) {
    super(props);
  }

  changeColor(index) {
    switch (index) {
      case 1:
        this.props.to1step(); this.props.disable2(); this.props.disable3(); this.props.disable4(); this.props.disable5();
        // this.props.navigation.navigate('Step1Screen');
        break;
      case 2:
        this.props.to2step(); this.props.enable2(); this.props.disable3(); this.props.disable4(); this.props.disable5();
        // this.props.navigation.navigate('Step2Screen');
        break;
      case 3:
        this.props.to3step(); this.props.enable2(); this.props.enable3(); this.props.disable4(); this.props.disable5();
        // this.props.navigation.navigate('Step3Screen');
        break;
      case 4:
        this.props.to4step(); this.props.enable2(); this.props.enable3(); this.props.enable4(); this.props.disable5();
        // this.props.navigation.navigate('Step4Screen');
        break;
      case 5:
        this.props.to5step(); this.props.enable2(); this.props.enable3(); this.props.enable4(); this.props.enable5();
        // this.props.navigation.navigate('Step5Screen');
        break;
    }
  }

  render() {
    return (
      <ViewPager
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

const mapStateToProps = state => ({
  step1color: state.step1color,
  step2color: state.step2color,
  step3color: state.step3color,
  step4color: state.step4color,
  step5color: state.step5color,
})

export default connect(mapStateToProps, actions)(PagesListNavigator);