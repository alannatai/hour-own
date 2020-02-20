import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';

const GoalsPage = props => {
  let goalsTotalHours;
	if (props.goals.length === 0) {
		return;
	} else if (props.goals.length === 1) {
		goalsTotalHours = props.goals[0].hoursPerDay;
	} else {
		goalsTotalHours = props.goals.reduce(
			(acc, curr) => acc.hoursPerDay + curr.hoursPerDay
		);
  }
	const header = `You have ${(24 - props.recurringHoursTotal) - goalsTotalHours} hours of free time per day. What are some goals you would like to accomplish?`;
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
