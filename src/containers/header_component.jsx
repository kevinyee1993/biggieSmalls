import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
// create new action creator which can reset the state of the
// selected box reducer
import { resetSelection } from '../actions/index';

class Header extends Component {
  constructor(props) {
    super(props);
    this.sizeChecker = this.sizeChecker.bind(this);
  }

  sizeChecker() {
    return ((this.props.boxSize1 === 'big' && this.props.boxSize2 === 'small') ||
  (this.props.boxSize1 === 'small' && this.props.boxSize2 === 'big'));
  }

  render() {
    if(this.sizeChecker()) {
      return(
        <div onClick={ this.props.resetSelection }>
          <h1 className='main-header'>HAHAHA!</h1>
        </div>
      );
    }
    else {
      return(
        <div>
          <h1 className='main-header'>HEADER</h1>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return({
    boxSize1: state.SelectedBox.boxSize1,
    boxSize2: state.SelectedBox.boxSize2
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ resetSelection: resetSelection }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
