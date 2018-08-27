import React, { Component } from 'react';
import { connect } from 'react-redux';


import SelectedBoxReducer from '../reducers/selected_box_reducer';


// reducer should have info for first selected box and second selected box
// just make each box map the appropriate specific data for itself
// instead of creating 2 separate containers which essentially do the same thing
class SelectedBox extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        { this.props.SelectedBox.test }
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return({
    SelectedBox: state.SelectedBox
  });
}


export default connect(mapStateToProps)(SelectedBox);
