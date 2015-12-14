import React, { Component } from 'react';
import TeamSearch from './TeamSearch';
import PlayerSearch from './PlayerSearch';
import SelectedTeam from './SelectedTeam';
import SelectedPlayer from './SelectedPlayer';
import connectToStores from 'alt/utils/connectToStores';
import TeamStore from '../stores/TeamStore';
import TeamActions from '../actions/TeamActions';
import PlayerStore from '../stores/PlayerStore';


@connectToStores
export default class Section1 extends Component{
  constructor(props) {
    super();

    this.getClass = this.getClass.bind(this);
  }

  static getStores(props) {
    TeamActions.get();
    return [
      TeamStore,
      PlayerStore
    ];
  }
  static getPropsFromStores(props) {
    return {
      ...TeamStore.getState(),
      ...PlayerStore.getState()
    }
  }

  getClass() {
    if (this.props.pickedTeam) {
      return "text-center hero slideUp";
    } else {
      return "text-center hero";
    }
  }

  render(){
    return (
      <div className="section1">
        <div className={this.getClass()}>
          <h2> Football stats for the EPL...for the month of October. </h2>
          <img src="http://highlandbar.com/static/img/sport1/05-Premier%20League%20Soccer.png" />
        </div>
        <h4 className="text-center col-md-6 col-md-offset-3">Search by<hr/></h4>
        <TeamSearch/>
        {this.props.pickedTeam && <SelectedTeam/>}
        {this.props.pickedPlayer && <SelectedPlayer/>}
      </div>
    );
  }
}
