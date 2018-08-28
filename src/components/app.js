import React, { Component } from 'react';

// components

// containers
import Header from '../containers/header_component';
import SelectableImage from '../containers/selectable_image';
import SelectedBox from '../containers/selected_box';
const BIG = 'big';
const SMALL = 'small';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectableImage size={ BIG } imageURL="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"/>
        <SelectableImage size={ SMALL } imageURL="http://woodstream.scene7.com/is/image/woodstream/hh-animals-mice-2?$ProductPgLarge2$"/>
        <SelectableImage size={ SMALL } imageURL="https://vignette.wikia.nocookie.net/hamtaro/images/1/1d/HamtaroN.png/revision/latest?cb=20150928215408"/>
      </div>
    );
  }
}
