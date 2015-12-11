import alt from '../lib/alt';

class PlayerActions {
  constructor() {
    this.generateActions('get', 'getPlayer', 'pickedPlayer')
  }
}

export default alt.createActions(PlayerActions)
