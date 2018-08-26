import React, { Component } from 'react';
import Header from './header_component';
import SelectableImage from './selectable_image';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SelectableImage size="big" imageURL="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"/>
        <SelectableImage size="small" imageURL="http://woodstream.scene7.com/is/image/woodstream/hh-animals-mice-2?$ProductPgLarge2$"/>
      </div>
    );
  }
}
