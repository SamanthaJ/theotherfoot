import React, { Component } from 'react';
import TeamStore from '../stores/TeamStore';
import connectToStores from 'alt/utils/connectToStores';
import TeamActions from '../actions/TeamActions';
import TeamSearch from './TeamSearch';
import { Pie } from "react-chartjs";
import COLORS from '../colors';

@connectToStores
export default class SelectedTeam extends Component{
  constructor(props){
    super();

    this.formattedData = this.formattedData.bind(this);
    this.displayRedCards = this.displayRedCards.bind(this);
  }

  static getStores(props) {
    return [TeamStore];
  }

  static getPropsFromStores(props) {
    return TeamStore.getState();
  }

  formattedData(eventType) {
    console.log(COLORS);
    if (this.props.team.players) {
      return this.props.team.players.map( (player, i) => {
        return {
          value: this.props.team.events
          .filter( event => event.player_id === player.id )
          .filter( event => event.event_type === eventType)
          .length,
          color: COLORS[i],
          highlight: "#FFC870",
          label: player.name
        }
      });
    } else {
      return {}
    }
  }

  displayRedCards() {
    if (this.props.team.players) {
      let formattedData = this.formattedData("Red cards");
      let hasCards = formattedData.map( data => data.value ).reduce( (sum, val) => {
        sum + val
      }, []);
      if (hasCards) {
        return <Pie data={formattedData} redraw/>;
      } else {
        return <h1>None</h1>;
      }
    } else {
      return {}
    }
  }

  render(){
    let events = this.props.team.events.map( event => {
      return <li key={event.id}>1 {event.event_type} - {event.date}</li>
    })

    let players = this.props.team.players.map(player => {
      return <li style={{display:'inline'}} key={player.id}>  {player.name} | </li>
    })
    return (
      <div style={{marginTop:'5%'}} className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <img style={{width: '100%'}} src={this.props.team.image_url}/>
          </div>
          <div className="events col-md-8">
            <div className="col-sm-6">
              <h4>Goals</h4>
              <Pie data={this.formattedData("Goals scored")} redraw/>
            </div>
            <div className="col-sm-6">
              <h4>Assists</h4>
              <Pie data={this.formattedData("Assists")} redraw/>
            </div>
            <div className="col-sm-6">
              <h4>Yellow Cards</h4>
              <Pie data={this.formattedData("Yellow cards")} redraw/>
            </div>
            <div className="col-sm-6">
              <h4>Red Cards</h4>
              {this.displayRedCards()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="players col-md-12">
            <ul>{players}</ul>
          </div>
        </div>
      </div>
    );
  }
}
