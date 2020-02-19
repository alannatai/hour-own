import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';

const GoalsPage = props => {
	return (
		<div className="GoalsPage-container">
			<div>
				<GoalsForm recurringHoursTotal={props.recurringHoursTotal} />
			
			</div>
		</div>
	);
};

export default GoalsPage;
