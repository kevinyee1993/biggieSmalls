import React, { Component } from 'react';

// components

// containers
import Header from '../containers/header_component';
import SelectableImage from '../containers/selectable_image';
import SelectedBox from '../containers/selected_box';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectableImage size="big" imageURL="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"/>
        <SelectableImage size="small" imageURL="http://woodstream.scene7.com/is/image/woodstream/hh-animals-mice-2?$ProductPgLarge2$"/>
        <SelectableImage size="small" imageURL="https://vignette.wikia.nocookie.net/hamtaro/images/1/1d/HamtaroN.png/revision/latest?cb=20150928215408"/>
        <SelectedBox boxNum="box1"/>
        <SelectedBox boxNum="box2"/>
      </div>
    );
  }
}
