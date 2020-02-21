import React, { Component } from 'react';
import CountUp from 'react-countup';

import './Timer.css';

function formatTime(hours) {
	let hourNum = Math.floor(hours)
		.toString()
		.padStart(2, '0');
	let mins = (((hours - hourNum) % 60) * 60).toString().padStart(2, '0');
	return `${hourNum}:${mins}`;
}

// class Timer extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			timer: 0
//     };
  
const Timer = props => {    

		const goals = props.goals;
		let goalsTotalHours;

		if (goals) {
			goalsTotalHours = props.goals.reduce((acc, curr) => {
				return acc + curr.hoursPerDay - curr.dailyHours;
			}, 0);
		}

		// let timerHours = Math.floor(goalsTotalHours).toString().padStart(2, '0');
		// let timerMins = (((goalsTotalHours - timerHours) % 60) * 60).toString().padStart(2, '0');

		console.log(props.finishedGoalHours);
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
					{formatTime(goalsTotalHours - props.finishedGoalHours)}
				</p>
			</div>
		);
	}


export default Timer;
