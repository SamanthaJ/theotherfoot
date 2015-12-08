import React, { Component } from 'react'
import { Typeahead } from 'react-typeahead'
import PlayerStore from '../stores/PlayerStore'
import connectToStores from 'alt/utils/connectToStores'
import PlayerActions from '../actions/PlayerActions'

@connectToStores
export default class TeamSearch extends Component {
  static getStores(props) {
    PlayerActions.get();
    return [PlayerStore];
  }
  static getPropsFromStores(props) {
    return PlayerStore.getState();
  }

  render() {

    const PLAYERS = this.props.players.map(player => {
      return <option key={player.id} value={player.id}>{player.name}</option>
    })

    return(
      <div className="thumbnail">
        <h3 className="text-center">Player</h3>
        <select className="form-control text-center">
          <option value="">Select a player</option>
          {PLAYERS}
        </select>
        <br/>
        <button className="btn col-md-8 col-md-offset-2 btn-primary">SEARCH</button>
      </div>
    );
  }
}
