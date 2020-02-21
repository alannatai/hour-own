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

	const header = `You have ${24 - props.recurringHoursTotal - goalsTotalHours} hours of free time per day. What are some goals you would like to accomplish?`;
	return (
		<div className="GoalsPage-container">
			<div>
				<header className="overlay">
					{header.split('').map((char, i) => (
						<span key={header + i}>{char}</span>
					))}
				</header>
        
				<div id="goals-list-container" className="recurring-goal-form-container">
					<GoalsForm recurringHoursTotal={props.recurringHoursTotal} />
					<ul className="goals-ul">
						{goals ? goals.map((goal, i) => (
							<li key={goal._id}>
								<span className="bold-text">{goal.name}</span>&nbsp;&nbsp;// {goal.hoursPerDay} hrs/day
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Modal id={i} goalId={goal._id} name={goal.name} hoursPerDay={goal.hoursPerDay} hoursComplete={goal.hoursComplete} hoursGoal={goal.hoursGoal}/>
								&nbsp;&nbsp;&nbsp;
                <button className="waves-effect waves-light btn-small pink darken-2" id={goal._id} onClick={props.deleteGoalHandler}>
									X
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
