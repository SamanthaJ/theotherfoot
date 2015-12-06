import React, { Component } from 'react'
import { Typeahead } from 'react-typeahead'
import TeamsStore from '../stores/TeamsStore'
import connectToStores from 'alt/utils/connectToStores'
import TeamsActions from '../actions/TeamsActions'

@connectToStores
export default class TeamSearch extends Component {
  static getStores(props) {
    TeamsActions.get();
    return [TeamsStore];
  }
  static getPropsFromStores(props) {
    return TeamsStore.getState();
  }

  render() {
    return(
      <div className="thumbnail">
        <h3 className="text-center">Team</h3>
        <div className="input-group">
          <Typeahead
            options={['John', 'Paul', 'George', 'Ringo']}
            maxVisible={2}
          />
          <select className="form-control">
              <option value="">Select a store to publish to</option>
              {this.props.teams.map(team => {
                return <option key={team.id} value={team.id}>{team.name}</option>
              })}
            </select>
        </div>
      </div>
    );
  }
}
