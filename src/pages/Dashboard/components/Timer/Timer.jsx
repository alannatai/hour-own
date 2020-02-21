import React from 'react';

import './Timer.css';

function formatTime(hours) {
	let hourNum = Math.floor(hours)
		.toString()
		.padStart(2, '0');
	let mins = (((hours - hourNum) % 60) * 60).toString().padStart(2, '0');
	return `${hourNum}:${mins}`;
}

const Timer = props => {    

		const goals = props.goals;
		let goalsTotalHours;

		if (goals) {
			goalsTotalHours = props.goals.reduce((acc, curr) => {
				return acc + curr.hoursPerDay - curr.dailyHours;
			}, 0);
		}

		return (
			<div className="Timer-container">
				<p className="Timer-text">
					{formatTime(goalsTotalHours)}
				</p>
			</div>
		);
	}


export default Timer;
