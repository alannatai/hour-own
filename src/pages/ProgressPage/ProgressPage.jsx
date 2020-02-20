import React from 'react';

import './ProgressPage.css';

const ProgressPage = props => {
	console.log(props);
	const header = `THIS IS THE HELLA COOL PROGRESS PAGE WITH NOTHING IN IT`;

	return (
		<div className="ProgressPage-container">
			<div>
				<header className="overlay">
					{header.split('').map((char, i) => (
						<span key={header + i}>{char}</span>
					))}
				</header>
				<ul>
					{props.goals.map((goal, i) => (
						<li>
							<p>{goal.name}</p>
							<progress
								class="progress_bar"
								value={goal.hoursComplete}
								max={goal.hoursGoal}
							></progress>
              <label>{goal.hoursComplete}/{goal.hoursGoal} EXP</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProgressPage;
