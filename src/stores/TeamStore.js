import alt from '../lib/alt'
import axios from 'axios'
import TeamActions from '../actions/TeamActions'


class TeamStore {
  constructor() {
    this.bindActions(TeamActions)
    this.state = {
      teams: [],
      team: []
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

  getTeam(id) {
    let self = this;
    return axios.get(`http://localhost:3000/api/v1/teams/${id}`)
    .then(function (response) {
      console.log(response);
      self.setState({team: response.data})
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}



export default alt.createStore(TeamStore, 'TeamStore')
