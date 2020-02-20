import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

import './SignupForm.css';

class SignupForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await userService.signup(this.state);
			this.props.handleSignupOrLogin();
			this.props.history.push('/user');
		} catch (err) {
			console.log(err);
		}
	};

	isFormInvalid() {
		return !(
			this.state.name &&
			this.state.email &&
			this.state.password === this.state.passwordConfirm
		);
	}

	render() {
		return (
			<>
				<header>Sign up</header>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						placeholder='Name'
						value={this.state.name}
						name='name'
						onChange={this.handleChange}
					/>
					<input
						type='email'
						placeholder='Email'
						value={this.state.email}
						name='email'
						onChange={this.handleChange}
					/>
					<input
						type='password'
						placeholder='Password'
						value={this.state.password}
						name='password'
						onChange={this.handleChange}
					/>
					<input
						type='password'
						placeholder='Confirm Password'
						value={this.state.passwordConfirm}
						name='passwordConfirm'
						onChange={this.handleChange}
					/>
					<button disabled={this.isFormInvalid()}>Sign Up</button>
					<Link to='/'>Cancel</Link>
				</form>
			</>
		);
	}
}

export default SignupForm;
