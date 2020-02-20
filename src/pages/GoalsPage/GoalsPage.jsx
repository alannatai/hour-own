import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';
import UpdateGoalModal from './components/UpdateGoalModal';

const GoalsPage = props => {
  const goals = props.goals;
  let goalsTotalHours;
  
	if (goals) {
		goalsTotalHours = props.goals.reduce((acc, curr) => {
			return acc + curr.hoursPerDay;
		}, 0);
  }
  console.log(goals)
  console.log(goalsTotalHours)

	const header = `You have ${24 - props.recurringHoursTotal - goalsTotalHours} hours of free time per day. What are some goals you would like to accomplish?`;
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
						{goals ? goals.map(goal => (
							<li key={goal._id}>
								{goal.name} || {goal.hoursPerDay} hours/day ||{' '}
								{goal.hoursComplete} hours complete!
                <button id={goal._id} onClick={props.}>
									Edit
								</button>
								<button id={goal._id} onClick={props.deleteGoalHandler}>
									Delete
								</button>
							</li>
						)) : 'No Goals Yet'}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GoalsPage;
