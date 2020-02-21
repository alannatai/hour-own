import React from 'react';

import './GoalsPage.css';
import GoalsForm from './components/GoalsForm/GoalsForm';
import Modal from './components/UpdateGoalModal';

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
					<ul className="goals-ul">
						{goals ? goals.map((goal, i) => (
							<li key={goal._id}>
								{goal.name} || {goal.hoursPerDay} hours/day ||{' '}
								{goal.hoursComplete} hours complete!
                <Modal id={i} goalId={goal._id} name={goal.name} hoursPerDay={goal.hoursPerDay} hoursComplete={goal.hoursComplete}/>
								<button className="waves-effect waves-light btn-small" id={goal._id} onClick={props.deleteGoalHandler}>
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
