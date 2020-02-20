import React from 'react';
import { Redirect } from 'react-router-dom';

import './Dashboard.css';
import Timer from './components/Timer/Timer';
import GoalsButtons from './components/GoalsButtons/GoalsButtons';

const Dashboard = props => {
  
	if (props.recurringHoursTotal) {
		return (
			<div className="Dashboard-container">
				<div>
					<Timer recurringHoursTotal={props.recurringHoursTotal} goals={props.goals} />
					<GoalsButtons goals={props.goals} goalCompleteHandler={props.goalCompleteHandler}/>
				</div>
			</div>
		);
	} else {
		return <Redirect to="/user/recurring" />;
	}
};

export default Dashboard;
