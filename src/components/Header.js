import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <Typist cursor={{show: false}}>
              <div className="navbar-header">
                <div className="navbar-brand">The Other Foot</div>
              </div>
            </Typist>
          </div>
        </nav>
      </div>
    );
  }
}
