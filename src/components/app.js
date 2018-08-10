import React, { Component } from 'react';
import Header from './header_component';
import EntryBox1 from './entry-box1';
import EntryBox2 from './entry-box2';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <EntryBox1 />
        <EntryBox2 />
      </div>
    );
  }
}
