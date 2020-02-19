import React from 'react';

import './Dashboard.css';
import Timer from './components/Timer/Timer';
import GoalsButtons from './components/GoalsButtons/GoalsButtons';

const Dashboard = props => {
  return (
    <div className='Dashboard-container'>
      <div>
        <Timer recurringHoursTotal={props.recurringHoursTotal} />
        <GoalsButtons />
      </div>
    </div> 
  )
}

export default Dashboard;