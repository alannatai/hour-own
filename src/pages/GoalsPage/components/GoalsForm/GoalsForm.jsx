import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import tokenService from '../../../../utils/tokenService';

class GoalsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			hoursPerDay: 0,
      hoursComplete: 0,
      hoursGoal: 0
		};
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
			.post('http://localhost:3000/api/goals/addGoal', this.state, options)
			.then(res => {
				window.location.reload();
			});
	};

	isFormInvalid() {
		return !(this.state.name && this.state.hoursPerDay);
	}

	render() {
		return (
			<>
				<form onSubmit={this.submitHandler}>
          <label htmlFor="name">Enter goal:</label>
					<input
						type="text"
						placeholder="eg. Work on Side Project"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/>
					<label htmlFor="hoursPerDay">Hours/Day:</label>
          <input
            type='number'
            placeholder='1.0'
						name='hoursPerDay'
						min='0.5'
						max='168'
						step='0.5'
						value={this.state.hoursPerDay}
						onChange={this.handleChange}
					/>
          <label htmlFor="hoursGoal">Number of hours goal:</label>
          <input
            type='number'
            placeholder='100'
						name='hoursGoal'
						min='1'
						step='1'
						value={this.state.hoursGoal}
						onChange={this.handleChange}
					/>
					<button disabled={this.isFormInvalid()}>Add</button>
					<Link to="/user/dashboard">Cancel</Link>
				</form>
			</>
		);
	}
}

export default GoalsForm;
