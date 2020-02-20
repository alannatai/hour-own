import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';

const GoalsPage = props => {
	const header = `You have ${24 -
		props.recurringHoursTotal} hours of free time per day. What are some goals you would like to accomplish?`;
	return (
		<div className="GoalsPage-container">
			<div>
				<header className="overlay">
					{header.split('').map((char, i) => (
						<span key={header + i}>{char}</span>
					))}
				</header>
				<div className="recurring-goal-form-container">
					<GoalsForm recurringHoursTotal={props.recurringHoursTotal} />
					<ul>
						{props.goals.map(goal => (
							<li key={goal._id}>
								{goal.name} || {goal.hoursPerDay} hours/day ||{' '}
								{goal.hoursComplete} hours complete!
								<button id={goal._id} onClick={props.deleteGoalHandler}>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GoalsPage;
