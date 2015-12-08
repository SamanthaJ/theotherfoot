import alt from '../lib/alt';

class EventActions {
  constructor() {
    this.generateActions('get')
  }
}

export default alt.createActions(EventActions)
