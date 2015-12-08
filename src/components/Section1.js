import React, { Component } from 'react'
import TeamSearch from './TeamSearch';
import PlayerSearch from './PlayerSearch';
import EventSearch from './EventSearch';

export default class Section1 extends Component{
  render(){
    return (
      <div className="section1 form-group">
        <h4 className="text-center col-md-6 col-md-offset-3">Search by
        <hr/>
        </h4>

          <TeamSearch/>

          <PlayerSearch/>
      </div>
    );
  }
}
