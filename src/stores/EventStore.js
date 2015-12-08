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
    return axios.get('http://localhost:3000/api/v1/events')
    .then(function (response) {
      console.log(response);
      self.setState({events: response.data})
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}



export default alt.createStore(EventStore, 'EventStore')
