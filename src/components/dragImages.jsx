import React, { Component } from 'react';

export default class DragImages extends Component {
  constructor(props) {
    super(props);
    this.farts = "farts";

    this.dragChangePosition = this.dragChangePosition.bind(this);
    // const dragElement = document.getElementById("draggable");
  }

  dragChangePosition(e) {

    console.log(e.clientX);

    // console.log(this.farts);
  }



  render() {
    return(
      <div id="draggable" onClick={ (e) => this.dragChangePosition(e) }>
        Image
      </div>
    );
  }
}
