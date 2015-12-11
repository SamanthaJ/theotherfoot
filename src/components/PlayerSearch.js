import React, { Component } from 'react';
import { Typeahead } from 'react-typeahead';
import PlayerStore from '../stores/PlayerStore';
import connectToStores from 'alt/utils/connectToStores';
import PlayerActions from '../actions/PlayerActions';
import SelectedPlayer from './SelectedPlayer';
import TeamActions from '../actions/TeamActions';


@connectToStores
export default class PlayerSearch extends Component {
  constructor(props) {
    super(props)

    this.onPickedPlayer = this.onPickedPlayer.bind(this);
  }

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

  onPickedPlayer(player) {
    PlayerActions.pickedPlayer(true);
    TeamActions.pickedTeam(false);
    PlayerActions.getPlayer(player.id);
  }

  render() {
    return(
      <div>
        <div className="col-md-6">
          <h2 className="text-center">Player</h2>
          <Typeahead
            filterOption='name'
            displayOption={this.displayOption}
            options={this.renderOptions()}
            onOptionSelected={this.onPickedPlayer}
          />
        </div>
      </div>
    );
  }
}
