import React from 'react';

import './Dashboard.css';
import RecurringForm from '../../components/RecurringForm/RecurringForm';
import Timer from './components/Timer/Timer';
import GoalsButtons from './components/GoalsButtons/GoalsButtons';

const Dashboard = props => {
  return (
    <div className='Dashboard-container'>
      <div>
        <Timer recurringHoursTotal={props.recurringHoursTotal} />
        <GoalsButtons />
        <RecurringForm />
      </div>
    </div> 
  )
}

export default Dashboard;