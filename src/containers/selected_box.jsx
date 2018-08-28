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
    if(this.props.boxPic) {
      return(
        <div className='selected-box'>
          <img src={ this.props.boxPic }/>
        </div>
      );
    } else {
      return(
        <div className='selected-box'>
          <h1 className='direction-header'>Select an image</h1>
        </div>
      );
    }
  }
}

// ownProps used for stuff like this where you want to access the props
// of the component in mapStateToProps or mapDispatchToProps to do
// some stuff in this case conditionally returning props!!!
function mapStateToProps(state, ownProps) {
  if(ownProps.boxNum === "box1") {
    return({
      boxPic: state.SelectedBox.boxPic1,
      boxSize: state.SelectedBox.boxSize1
      // ,otherBoxPic: state.SelectedBox.boxPic2,
      // otherBoxSize: state.SelectedBox.boxSize2
    });
  } else if(ownProps.boxNum === "box2") {
    return({
      boxPic: state.SelectedBox.boxPic2,
      boxSize: state.SelectedBox.boxSize2
      // ,otherBoxPic: state.SelectedBox.boxPic1,
      // otherBoxSize: state.SelectedBox.boxSize1
    });
  }
}


export default connect(mapStateToProps)(SelectedBox);
