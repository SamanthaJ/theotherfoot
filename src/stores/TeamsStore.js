import alt from '../lib/alt'
import axios from 'axios'
import TeamsActions from '../actions/TeamsActions'


class TeamsStore {
  constructor() {
    this.bindActions(TeamsActions)
    this.state = {
      teams: [],
    }
  }


  get() {
    let self = this;
    return axios.get('http://localhost:3000/api/v1/teams.json')
    .then(function (response) {
      console.log(response);
      self.setState({teams: response.data})
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}



export default alt.createStore(TeamsStore, 'TeamsStore')
