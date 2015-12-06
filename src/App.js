import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Header from './components/Header';
import Section1 from './components/Section1';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section1/>
      </div>
    );
  }
}
