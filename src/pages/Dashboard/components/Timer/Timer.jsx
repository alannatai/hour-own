import React from 'react';
import CountUp from 'react-countup';

import './Timer.css';

function formatTime(hours) {
	let hourNum = Math.floor(hours)
		.toString()
		.padStart(2, '0');
	let mins = (((hours - hourNum) % 60) * 60).toString().padStart(2, '0');
	return `${hourNum}:${mins}`;
}

const Timer = props => {
	const goalsTotalHours = props.goals.reduce((acc, curr) => {
		return acc + curr.hoursPerDay;
	}, 0);
	// let goalsTotalHours;
	// if (props.goals.length === 0) {
	// 	return;
	// } else if (props.goals.length === 1) {
	// 	goalsTotalHours = props.goals[0].hoursPerDay;
	// } else {
	// 	goalsTotalHours = props.goals.reduce((acc, curr) => {
	// 		return acc + curr.hoursPerDay;
	// 	}, 0);
	// }

	// let timerHours = Math.floor(goalsTotalHours).toString().padStart(2, '0');
	// let timerMins = (((goalsTotalHours - timerHours) % 60) * 60).toString().padStart(2, '0');

	return (
		<div className="Timer-container">
			<p className="Timer-text">
				{/* <CountUp
					start={0}
					end={timerHours}
					duration={2}
				/>:
        <CountUp
					start={60}
					end={timerMins}
					duration={2}
				/> */}
				{formatTime(goalsTotalHours)}
			</p>
		</div>
	);
};

export default Timer;
