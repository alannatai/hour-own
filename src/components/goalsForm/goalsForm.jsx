import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import tokenService from '../../utils/tokenService';

class GoalsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			hoursPerWeek: 0,
      hoursComplete: 0
    }
  }
  

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitHandler = e => {
		e.preventDefault();
		const options = {
			headers: { Authorization: 'Bearer ' + tokenService.getToken() }
		};
		axios
			.post(
				'http://localhost:3000/api/goals/addGoal',
				this.state,
				options
			)
			.then(res => {
				window.location.reload();
				console.log(res.data);
			});
	};

	isFormInvalid() {
		return !(this.state.name && this.state.hours);
	}

	render() {
		return (
			<>
				<header>Let's find out how much free time you have in the day!</header>
				<form onSubmit={this.submitHandler}>
					<input
						type="text"
						placeholder="Enter recurring task"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/>
					<label htmlFor="hours">Hours:</label>
					<input
						type="number"
						name="hours"
						min="0"
						max="24"
						step="1"
						value={this.state.hours}
						onChange={this.handleChange}
					/>
					<button disabled={this.isFormInvalid()}>Add</button>
					<Link to="/">Cancel</Link>
				</form>
			</>
		);
	}
}

export default GoalsForm;
