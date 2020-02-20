import React from 'react';

import './RecurringPage.css';
import RecurringForm from './components/RecurringForm/RecurringForm';

const RecurringPage = props => {
	const tasks = props.recurringTasks;

	if (props.recurringTasks) {
		return (
			<div className="RecurringPage-container">
				<div>
					<RecurringForm />
					<ul>
						{tasks.map(task => (
							<li key={task._id}>
								{task.name} {task.hours} hours 
                <button id={task._id} onClick={props.deleteRecurringHandler}>Delete</button>
							</li>
						))}
						<li>Total: {props.recurringHoursTotal} hours/day</li>
					</ul>
				</div>
			</div>
		);
	}
	return (
		<div className="RecurringPage-container">
			<div>
				<RecurringForm />
			</div>
		</div>
	);
};

export default RecurringPage;
