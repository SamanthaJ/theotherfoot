import alt from '../lib/alt'
import axios from 'axios'
import EventActions from '../actions/EventActions'

class EventStore {
  constructor() {
    this.bindActions(EventActions)
    this.state = {
      events: [],
    }
  }

  get() {
    let self = this;
    return axios.get('http://footstats-api.herokuapp.com/api/v1/events')
    .then(function (response) {
      self.setState({events: response.data})
    })
  }
}

export default alt.createStore(EventStore, 'EventStore')
