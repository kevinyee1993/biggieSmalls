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
        <div className='selected-box-pair'>
          <SelectedBox boxNum="box1"/>
          <SelectedBox boxNum="box2"/>
        </div>

        <div className='selectable-image-group'>
          <SelectableImage size={ BIG } imageURL="https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"/>
          <SelectableImage size={ SMALL } imageURL="http://woodstream.scene7.com/is/image/woodstream/hh-animals-mice-2?$ProductPgLarge2$"/>
          <SelectableImage size={ BIG } imageURL="https://vignette.wikia.nocookie.net/monster/images/8/8d/Godzilla_2014_RoomMates_Godzilla_Peel_and_Stick_Giant_Wall_Decals.jpg/revision/latest?cb=20160114191906"/>
          <SelectableImage size={ SMALL } imageURL="https://static.hudl.com/users/prod/10553330_346247d59b664883bb5cdcd54f4ae136.jpg"/>
        </div>

        <div className='selectable-image-group'>
          <SelectableImage size={ BIG } imageURL="https://www.shopmyexchange.com/products/images/xlarge/7033934_1237.jpg"/>
          <SelectableImage size={ SMALL } imageURL="https://cdn.shopify.com/s/files/1/0751/7203/products/16oz-Wide-Mouth-w-Hydro-Flip-AW_600x.jpg?v=1447698970"/>
          <SelectableImage size={ BIG } imageURL="https://i.ytimg.com/vi/-kfG0yZBn74/maxresdefault.jpg"/>
          <SelectableImage size={ SMALL } imageURL="https://vignette.wikia.nocookie.net/hamtaro/images/1/1d/HamtaroN.png/revision/latest?cb=20150928215408"/>

        </div>
      </div>
    );
  }
}
