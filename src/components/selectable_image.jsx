import React, { Component } from 'react';

export default class SelectableImage extends Component {

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
