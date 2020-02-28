import React from 'react';

import './GoalsButtons.css';

const GoalsButtons = props => {
	const goals = props.goals;
	return (
		<div className="GoalsButtons-container">
			<ul>
        {goals.map(goal => (
					<li key={goal._id}>
            <button 
              id={goal._id} 
              hours={goal.hoursPerDay} 
              className={`goal-button ${(goal.hoursPerDay === goal.dailyHours) && "disabled-button"}`} 
              disabled={(goal.hoursPerDay === goal.dailyHours)}
              onClick={props.goalCompleteHandler}
            >
              {goal.name}: {goal.hoursPerDay} hours
            </button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default GoalsButtons;
