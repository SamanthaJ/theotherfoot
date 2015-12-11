import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PlayerSearch from './PlayerSearch';
import PlayerStore from '../stores/PlayerStore';
import PlayerActions from '../actions/PlayerActions';



@connectToStores
export default class SelectedPlayer extends Component{

  static getStores(props) {
    PlayerActions.get();
    return [PlayerStore];
  }
  static getPropsFromStores(props) {
    return PlayerStore.getState();
  }

  render(){

    let events = this.props.player.events.map(event => {
      return <li key={event.id}>1 {event.event_type} - {event.date}</li>
    })

    return (
      <div className="col-md-12">
        <div className="col-md-4">
          <h4>Player Name</h4>
          <h2>{this.props.player.name}</h2>
          <br/>
          <br/>
          <h4>Team Name</h4>
          <h2>{this.props.player.team.name}</h2>
        </div>
        <div className="col-md-8">
          <h4>Stats</h4>
          <ul>{events}</ul>
        </div>
      </div>
    );
  }
}
