import alt from '../lib/alt'
import axios from 'axios'
import PlayerActions from '../actions/PlayerActions'


class PlayerStore {
  constructor() {
    this.bindActions(PlayerActions)
    this.state = {
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
    return axios.get('http://localhost:3000/api/v1/players')
    .then(function (response) {
      console.log(response);
      self.setState({players: response.data})
    })
    .catch(function (response) {
      console.log(response);
    });
  }

  getPlayer(id) {
    let self = this;
    return axios.get(`http://localhost:3000/api/v1/players/${id}`)
    .then(function (response) {
      console.log(response);
      self.setState({player: response.data})
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}



export default alt.createStore(PlayerStore, 'PlayerStore')
