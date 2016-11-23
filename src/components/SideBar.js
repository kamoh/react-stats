import React from 'react';
import StatsUrlList from './StatsUrlList'

let statsUrlArray = ['https://www.kotaku.com','http://www.hampsterdance.com','http://www.ign.com'];

export default React.createClass({
  render: function() {
    return(
      <div className='sidebar' width='20%' height='100%'>
        <StatsUrlList
          statsUrls={statsUrlArray}
        />
      </div>
    )
  }
});
