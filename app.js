import React from 'react';
import Clock from './clock.js';


export default React.createClass({


  render: function () {
  	var date = new Date();
  	var hour = date.getHours();


    return (
     <div>
     	<Clock time={date}/>
     </div>
    )
  }
})