import React from 'react';

import './RecurringPage.css';
import RecurringForm from '../../components/RecurringForm/RecurringForm';

const RecurringPage = props => {
  const tasks = props.recurringTasks;

	return (
		<div className="RecurringPage-container">
			<div>
				<RecurringForm />
				<ul>
					{tasks.map(task => (
						<li key={task._id}>
							{task.name} {task.hours} hours
						</li>
					))}
          <li>Total: {props.recurringHoursTotal} hours/day</li>
				</ul>
			</div>
		</div>
	);
};

export default RecurringPage;
