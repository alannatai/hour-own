import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import tokenService from '../../utils/tokenService';

class RecurringForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hours: ''
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
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    };
    axios
      .post('http://localhost:3000/api/recurring/addRecurring', this.state, options)
      .then(res => {
        window.location.reload();
        console.log(res.data)
      });
  };

	isFormInvalid() {
		return !(this.state.name && this.state.hours);
	}

	render() {
		return (
			<>
				<header>Enter your daily necessities</header>
				<form onSubmit={this.submitHandler}>
					<input
						type='text'
						placeholder='Sleep'
						value={this.state.name}
						name='name'
						onChange={this.handleChange}
					/>
					<input
						type='text'
						placeholder='8'
						value={this.state.hours}
						name='hours'
						onChange={this.handleChange}
					/>
					<button disabled={this.isFormInvalid()}>Add</button>
					<Link to='/'>Cancel</Link>
				</form>
			</>
		);
	}
}

export default RecurringForm;
