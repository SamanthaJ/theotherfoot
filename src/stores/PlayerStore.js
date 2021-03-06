import alt from '../lib/alt';
import axios from 'axios';
import PlayerActions from '../actions/PlayerActions';


class PlayerStore {
  constructor() {
    this.bindActions(PlayerActions)
    this.state = {
      pickedPlayer: false,
      players: [],
      player: {
        events: [],
        name: '',
        team: {
          name:''
        }
      }
    }
  }

  get() {
    let self = this;
    return axios.get('http://footstats-api.herokuapp.com/api/v1/players')
    .then(function (response) {
      self.setState({players: response.data})
    })
  }

  getPlayer(id) {
    let self = this;
    return axios.get(`http://footstats-api.herokuapp.com/api/v1/players/${id}`)
    .then(function (response) {
      self.setState({player: response.data})
    })
  }

  pickedPlayer(value) {
    this.setState({pickedPlayer: value});
  }
}

export default alt.createStore(PlayerStore, 'PlayerStore')
