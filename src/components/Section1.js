import React, { Component } from 'react';
import TeamSearch from './TeamSearch';
import PlayerSearch from './PlayerSearch';
import SelectedTeam from './SelectedTeam';
import SelectedPlayer from './SelectedPlayer';
import connectToStores from 'alt/utils/connectToStores';
import TeamStore from '../stores/TeamStore';
import TeamActions from '../actions/TeamActions';
import PlayerStore from '../stores/PlayerStore';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

@connectToStores
export default class Section1 extends Component{
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

  render(){
    return (
      <div className="section1">
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {!this.props.pickedTeam && <h2 className="text-center">Football stats for the EPL...for the month of October.<br/><br/> </h2>}
      </ReactCSSTransitionGroup>

        <h4 className="text-center col-md-6 col-md-offset-3">Search by<hr/></h4>
        <TeamSearch/>
        {this.props.pickedTeam && <SelectedTeam/>}
        {this.props.pickedPlayer && <SelectedPlayer/>}
      </div>
    );
  }
}
