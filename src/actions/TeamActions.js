import alt from '../lib/alt';

class TeamActions {
  constructor() {
    this.generateActions('get', 'getTeam')
  }
}

export default alt.createActions(TeamActions)
