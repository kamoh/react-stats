import alt from '../alt';
import StatsUrlActions from '../actions/StatsUrlActions';

class StatsUrlStore {
  constructor(){
    this.statsUrls = [];

    this.bindListeners({
      handleClickStatsUrl: StatsUrlActions.clickStatsUrl
    });
  }

  handleClickStatsUrl(statsUrl) {
    debugger;
  }
}

module.exports = alt.createStore(StatsUrlStore, 'StatsUrlStore');
