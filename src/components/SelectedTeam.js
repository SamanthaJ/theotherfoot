import React, { Component } from 'react';
import TeamStore from '../stores/TeamStore';
import connectToStores from 'alt/utils/connectToStores';
import TeamActions from '../actions/TeamActions';
import TeamSearch from './TeamSearch';

@connectToStores
export default class SelectedTeam extends Component{
  static getStores(props) {
    TeamActions.get();
    return [TeamStore];
  }
  static getPropsFromStores(props) {
    return TeamStore.getState();
  }

  render(){
    let events = this.props.team.events.map(event => {
      return <li key={event.id}>1 {event.event_type} - {event.date}</li>
    })

    let players = this.props.team.players.map(player => {
      return <li key={player.id}>{player.name}</li>
    })

    return (
      <div className="col-md-12">
        <div className="col-md-4">
          <h2>{this.props.team.name}</h2>
          <p> Team logo underneath!</p>
          <img style={{width: '100%'}} src={this.props.team.image_url}/>
        </div>
          <div className="players col-md-4">
            <ul>{players}</ul>
          </div>
          <div className="events col-md-4">
            <ul>{events}</ul>
          </div>
      </div>
    );
  }
}
