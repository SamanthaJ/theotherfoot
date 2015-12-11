import alt from '../lib/alt';

class TeamActions {
  constructor() {
    this.generateActions('get', 'getTeam', 'pickedTeam')
  }
}

export default alt.createActions(TeamActions)
