import React from 'react';

import './ProgressPage.css';

const ProgressPage = props => {
	const header = `THIS IS THE HELLA COOL PROGRESS PAGE`;

	return (
		<div className="ProgressPage-container">
			<div>
				<header className="overlay">
					{header.split('').map((char, i) => (
						<span key={header + i}>{char}</span>
					))}
				</header>
				<ul className="progress-list">
					{props.goals.filter(goal => goal.hoursComplete < goal.hoursGoal).map((goal, i) => (
						<li key={goal.id}>
							<div>
								<div className="progress-text">
									<p>{goal.name}</p>
								</div>
								<div className="progress-li">
									<progress
										className="progress_bar"
										value={goal.hoursComplete}
										max={goal.hoursGoal}
									></progress>
									<label className="progress-exp">
										{goal.hoursComplete}/{goal.hoursGoal} EXP
									</label>
								</div>
							</div>
						</li>
					))}
				</ul>
        <div className="CompletedGoals-container">
          <ul>
            {props.goals.filter(goal => goal.hoursComplete >= goal.hoursGoal).map(goal => (
              <li key={goal._id} className="completed-goal">
                {goal.name}: {goal.hoursPerDay} hours
              </li>
            ))}
          </ul>
        </div>
      </div>
		</div>
	);
};

export default ProgressPage;
