import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';

const GoalsPage = props => {
	return (
		<div className="GoalsPage-container">
			<div>
				<GoalsForm recurringHoursTotal={props.recurringHoursTotal} />
				<ul>
					{props.goals.map(goal => (
						<li key={goal._id}>
							{goal.name} || {goal.hoursPerDay} hours/day || {goal.hoursComplete} hours complete!
							<button id={goal._id} onClick={props.deleteGoalHandler}>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default GoalsPage;
