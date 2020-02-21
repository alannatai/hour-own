import React from 'react';

import './ProgressPage.css';

const ProgressPage = props => {
	console.log(props);
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
					{props.goals.map((goal, i) => (
						<li>
							<div>
								<div className="progress-text">
									<p>{goal.name}</p>
								</div>
								<div className="progress-li">
									<progress
										class="progress_bar"
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
			</div>
		</div>
	);
};

export default ProgressPage;
