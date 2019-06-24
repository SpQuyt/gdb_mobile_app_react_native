import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class PagesList extends Component {

  render() {
    return (
      this.props.currentIndex == 1 ? <Page1/>
      : this.props.currentIndex == 2 ? <Page2/>
      : this.props.currentIndex == 3 ? <Page3/>
      : this.props.currentIndex == 4 ? <Page4/>
      : <Page5/>
    )
  }
}

const mapStateToProps = state => ({
  currentIndex: state.currentIndex,
});

export default connect(mapStateToProps, actions)(PagesList);
