import React from 'react';

import './Timer.css';

function formatTime(hours) {
  let hourNum = Math.floor(hours).toString().padStart(2, '0');
  let mins = (((hours - hourNum) % 60) * 60).toString().padStart(2, '0'); 
  return `${hourNum}:${mins}`;
}

const Timer = (props) => {
  return (
    <div className='Timer-container'>
      <p className='Timer-text'>{formatTime(24 - props.recurringHoursTotal)}</p>
    </div> 
  )
}

export default Timer;