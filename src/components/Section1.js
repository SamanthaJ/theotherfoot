import React, { Component } from 'react'  
import TeamSearch from './TeamSearch';
import PlayerSearch from './PlayerSearch';
import EventSearch from './EventSearch';

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
          <PlayerSearch/>
        </div>
        <div className="col-md-4">
          <EventSearch/>
        </div>
      </div>
    );
  }
}
