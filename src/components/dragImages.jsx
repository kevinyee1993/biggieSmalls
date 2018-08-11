import React, { Component } from 'react';

export default class DragImages extends Component {
  constructor(props) {
    super(props);
    this.farts = "farts";

    this.dragChangePosition = this.dragChangePosition.bind(this);
  }

  dragChangePosition(e) {
    const dragElement = document.getElementById("draggable");

    console.log(e.clientX);

    // console.log(this.farts);
  }



  render() {
    return(
      <div id="draggable" draggable="true" onDrag={ (e) => this.dragChangePosition(e) }>
        Image
      </div>
    );
  }
}
