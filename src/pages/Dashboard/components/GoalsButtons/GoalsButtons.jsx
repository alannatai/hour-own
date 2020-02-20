import React from 'react';

import './GoalsButtons.css';

const GoalsButtons = props => {
	const goals = props.goals;
	return (
		<div className="GoalsButtons-container">
			<ul>
				{goals.map(goal => (
					<li key={goal._id}>
            <button id={goal._id} className="goal-button" onClick={props.goalCompleteHandler}>{goal.name}: {goal.hoursPerDay} hours</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GoalsButtons;
