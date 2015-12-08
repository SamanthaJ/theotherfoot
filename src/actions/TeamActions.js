import alt from '../lib/alt';

class TeamActions {
  constructor() {
    this.generateActions('get')
  }
}

export default alt.createActions(TeamActions)
