import alt from '../lib/alt';
import axios from 'axios';
import TeamActions from '../actions/TeamActions';

class TeamStore {
  constructor() {
    this.bindActions(TeamActions)
    this.state = {
      teams: [],
      pickedTeam: false,
      team: {
        events: [],
        players: []
      }
    }
  }

  get() {
    let self = this;
    return axios.get('http://localhost:3000/api/v1/teams.json')
    .then(function (response) {
      console.log(response);
      self.setState({teams: response.data});
    });
  }

  getTeam(id) {
    let self = this;
    return axios.get(`http://localhost:3000/api/v1/teams/${id}`)
    .then(function (response) {
      console.log(response);
      self.setState({team: response.data});
    });
  }

  pickedTeam(value) {
    console.log(value)
    this.setState({pickedTeam: value});
  }
}

export default alt.createStore(TeamStore, 'TeamStore')
