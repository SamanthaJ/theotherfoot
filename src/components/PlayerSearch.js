import React, { Component } from 'react'
import { Typeahead } from 'react-typeahead'
import PlayerStore from '../stores/PlayerStore'
import connectToStores from 'alt/utils/connectToStores'
import PlayerActions from '../actions/PlayerActions'

@connectToStores
export default class PlayerSearch extends Component {
  static getStores(props) {
    PlayerActions.get();
    return [PlayerStore];
  }
  static getPropsFromStores(props) {
    return PlayerStore.getState();
  }

  renderOptions() {
    return this.props.players.map(player => {
      return player;
    });
  }

  displayOption(option) {
    return option.name;
  }

  pickedPlayer(player) {
    // alert(player.id);
    PlayerActions.getPlayer(player.id);
    //Psuedo
    // player.id is the variable
    // axios.get(localhost:3000/player/player.id)
  }

  render() {

    let PLAYERS = this.props.players.map(player => {
      return <option key={player.id} value={player.id}>{player.name}</option>
    })

    let events = this.props.player.events.map(event => {
      return <li key={event.id}>1 {event.event_type} - {event.date}</li>
    })

    return(
      <div className="thumbnail">
        <h3 className="text-center">Player</h3>
        <Typeahead
          filterOption='name'
          displayOption={this.displayOption}
          options={this.renderOptions()}
          onOptionSelected={this.pickedPlayer}
        />
        <br/>
        <h1>{this.props.player.name}</h1>
        <h2>{this.props.player.team.name}</h2>
        <ul>{events}</ul>
      </div>
    );
  }
}
