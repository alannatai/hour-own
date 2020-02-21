import React from 'react';

import './RecurringPage.css';
import RecurringForm from './components/RecurringForm/RecurringForm';

const RecurringPage = props => {
	const tasks = props.recurringTasks;
	const header = "Let's find out how much free time you have in the day!";

	if (props.recurringTasks) {
		return (
			<div className="RecurringPage-container">
				<div>
					<header className="overlay">
						{header.split('').map((char, i) => (
							<span key={header + i}>{char}</span>
						))}
					</header>
					<div className="recurring-goal-form-container">
						<RecurringForm />
						<ul>
							{tasks.map(task => (
								<li key={task._id}>
									{task.name} // {task.hours} hours
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<button className="waves-effect waves-light btn-small pink darken-2" id={task._id} onClick={props.deleteRecurringHandler}>
										X
									</button>
								</li>
							))}
							<li className="bold-text">Total: {props.recurringHoursTotal} hours/day</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="RecurringPage-container">
			<div>
				<header className="overlay">
					{header.split('').map((char, i) => (
						<span key={header + i}>{char}</span>
					))}
				</header>
				<div className="recurring-goal-form-container">
					<RecurringForm />
				</div>
			</div>
		</div>
	);
};

export default RecurringPage;
