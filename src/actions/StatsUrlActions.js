import alt from '../alt';

class StatsUrlActions {
  clickStatsUrl(url) {
    // alert('you clicked on the thing and it went WHOA! ' + url);
    // return (dispatch) => {
    //   dispatch(url);
    // }
    return url;
  }
}

module.exports = alt.createActions(StatsUrlActions);
