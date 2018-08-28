import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectImage } from '../actions';

class SelectableImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let image = { imageURL: this.props.imageURL, imageSize: this.props.size };

    return(
    <div className='selectable-image' onClick={ () => {
        this.props.selectImage(image);
      } }>
        <img src={ this.props.imageURL } ></img>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectImage: selectImage }, dispatch);
}

export default connect(null, mapDispatchToProps)(SelectableImage);
