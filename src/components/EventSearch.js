import React, { Component } from 'react'
import EventStore from '../stores/EventStore'
import connectToStores from 'alt/utils/connectToStores'
import EventActions from '../actions/EventActions'

@connectToStores
export default class TeamSearch extends Component {
  static getStores(props) {
    EventActions.get();
    return [EventStore];
  }
  static getPropsFromStores(props) {
    return EventStore.getState();
  }

  render() {

    const EVENTS = this.props.events.map(event => {
      return <option key={event.id} value={event.id}>{event.date}</option>
    })

    return(
      <div className="thumbnail">
        <h3 className="text-center">Date</h3>
        <select className="form-control text-center">
          <option value="">Select a date to search by</option>
          {EVENTS}
        </select>
        <br/>
        <button className="btn col-md-8 col-md-offset-2 btn-primary">SEARCH</button>
      </div>
    );
  }
}
