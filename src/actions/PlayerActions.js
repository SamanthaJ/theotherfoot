import alt from '../lib/alt';

class PlayerActions {
  constructor() {
    this.generateActions('get')
  }
}

export default alt.createActions(PlayerActions)
