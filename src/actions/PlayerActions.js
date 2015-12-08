import alt from '../lib/alt';

class PlayerActions {
  constructor() {
    this.generateActions('get', 'getPlayer')
  }
}

export default alt.createActions(PlayerActions)
