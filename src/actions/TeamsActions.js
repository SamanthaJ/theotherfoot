import alt from '../lib/alt';

class TeamsActions {
  constructor() {
    this.generateActions('get')
  }
}

export default alt.createActions(TeamsActions)
