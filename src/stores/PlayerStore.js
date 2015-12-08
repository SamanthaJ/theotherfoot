import alt from '../lib/alt'
import axios from 'axios'
import PlayerActions from '../actions/PlayerActions'


class PlayerStore {
  constructor() {
    this.bindActions(PlayerActions)
    this.state = {
      players: [],
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
}



export default alt.createStore(PlayerStore, 'PlayerStore')
