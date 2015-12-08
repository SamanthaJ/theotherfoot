import React, { Component } from 'react'
import { Typeahead } from 'react-typeahead'
import TeamStore from '../stores/TeamStore'
import connectToStores from 'alt/utils/connectToStores'
import TeamActions from '../actions/TeamActions'

@connectToStores
export default class TeamSearch extends Component {
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

  pickedTeam(team) {
    // alert(player.id);
    TeamActions.getTeam(team.id);
    //Psuedo
    // player.id is the variable
    // axios.get(localhost:3000/player/player.id)
  }

  render() {

    let TEAMS = this.props.teams.map(team => {
      return <option key={team.id} value={team.id}>{team.name}</option>
    })

    return(
      <div className="col-md-6">
        <h2 className="text-center">Team</h2>

        <Typeahead
          filterOption='name'
          displayOption={this.displayOption}
          options={this.renderOptions()}
          onOptionSelected={this.pickedTeam}
          customClasses={{
          input: "topcoat-text-input",
          results: "topcoat-list__container",
          listItem: "topcoat-list__item",
          hover: "topcoat-active",
          customAdd: "topcoat-addme"
        }}
        />
          <br/>
          <div className="text-center col-md-6 col-md-offset-3">

          {this.props.team.name}
          </div>

      </div>
    );
  }
}
