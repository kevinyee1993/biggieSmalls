import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectImage } from '../actions';

class SelectableImage extends Component {

  constructor(props) {
    super(props);
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage() {
    console.log(this.props.size);
  }


  render() {
    return(
      <div className='selectable-image' onClick={ this.selectImage }>
        <img src={ this.props.imageURL } ></img>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectImage: selectImage }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectableImage);
