import React from 'react';

import './Dashboard.css';
import RecurringForm from '../../components/RecurringForm/RecurringForm';

const Dashboard = (props) => {
  return (
    <div className='Dashboard-container'>
      <div>
        <p>Dashboard</p>
        <RecurringForm/>
      </div>
    </div> 
  )
}

export default Dashboard;