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

  render() {

    const TEAMS = this.props.teams.map(team => {
      return <option key={team.id} value={team.id}>{team.name}</option>
    })

    return(
      <div className="thumbnail">
        <h3 className="text-center">Team</h3>

        <select className="form-control text-center">
          <option value="">Select a team</option>
          {TEAMS}
        </select>
        <br/>
        <button className="btn col-md-8 col-md-offset-2 btn-primary">SEARCH</button>
      </div>
    );
  }
}
