import React, { Component } from 'react';
import { Typeahead } from 'react-typeahead';
import TeamStore from '../stores/TeamStore';
import connectToStores from 'alt/utils/connectToStores';
import TeamActions from '../actions/TeamActions';
import PlayerActions from '../actions/PlayerActions';
import SelectedTeam from './SelectedTeam';

@connectToStores
export default class TeamSearch extends Component {
  constructor(props) {
    super(props)

    this.onPickedTeam = this.onPickedTeam.bind(this);
  }

  static getStores(props) {
    TeamActions.get();
    return [TeamStore];
  }

  static getPropsFromStores(props) {
    return TeamStore.getState();
  }

  renderOptions() {
    return this.props.teams.map(team => {
      return team;
    });
  }

  displayOption(option) {
    return option.name;
  }

  onPickedTeam(team) {
    TeamActions.pickedTeam(true);
    PlayerActions.pickedPlayer(false);
    TeamActions.getTeam(team.id);
  }
  
  render() {
    return(
      <div>
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">Team</h2>
          <Typeahead
            filterOption='name'
            displayOption={this.displayOption}
            options={this.renderOptions()}
            onOptionSelected={this.onPickedTeam}
            customClasses={{
            input: "topcoat-text-input",
            results: "topcoat-list__container",
            listItem: "topcoat-list__item",
            hover: "topcoat-active",
            customAdd: "topcoat-addme"
          }}
          />
        </div>
      </div>
    );
  }
}
