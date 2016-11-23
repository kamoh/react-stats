import React from 'react';
import StatsUrlActions from '../actions/StatsUrlActions'

export default React.createClass({
  handleStatsUrlClick(e) {
    StatsUrlActions.clickStatsUrl(e);
  },

  render: function() {
    let statsUrls = this.props.statsUrls.map(statsUrl => {
      return <div onClick={this.handleStatsUrlClick}>
               <p>{statsUrl}</p>
             </div>
      })

    return(
      <div className='statsUrl-list'>
        {statsUrls}
      </div>
    )
  }
});
