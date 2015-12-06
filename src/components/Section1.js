import React, { Component } from 'react'
import TeamSearch from './TeamSearch';

export default class Section1 extends Component{
  render(){
    return (
      <div className="section1">
        <h1 className="text-center">search by</h1>
        <br/>
        <div className="col-md-4">
          <TeamSearch/>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <h3 className="text-center">Player</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <h3 className="text-center">Date</h3>
          </div>
        </div>
      </div>
    );
  }
}
