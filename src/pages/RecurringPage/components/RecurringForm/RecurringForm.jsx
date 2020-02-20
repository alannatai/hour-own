import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './RecurringForm.css';
import tokenService from '../../../../utils/tokenService';

class RecurringForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			hours: ''
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
			.post(
				'http://localhost:3000/api/recurring/addRecurring',
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
				<form onSubmit={this.submitHandler}>
          <label htmlFor='name'>Enter daily necessity:</label>
					<input
						type='text'
						placeholder='eg. Sleep'
						value={this.state.name}
						name='name'
						onChange={this.handleChange}
					/>
					<label htmlFor='hours'>Hours/Day:</label>
					<input
            type='number'
            placeholder='1.00'
						name='hours'
						min='0.25'
						max='24'
						step='0.25'
						value={this.state.hours}
						onChange={this.handleChange}
					/>
					<button disabled={this.isFormInvalid()}>Add</button>
					<Link to='/user/dashboard'>Cancel</Link>
				</form>
			</>
		);
	}
}

export default RecurringForm;
