import React from 'react';
import Iframe from 'react-iframe';

export default React.createClass({
  render: function() {
    return(
      <div className='main-container'>
        <Iframe url="http://www.nytimes.com" height='80%' width='80%'/>
      </div>
    )
  }
});
