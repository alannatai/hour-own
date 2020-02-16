import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

import './LoginPage.css';

class LoginPage extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = e => {
		this.setState({ 
      [e.target.name]: e.target.value 
    });
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await userService.login(this.state);
			this.props.handleSignupOrLogin();
			this.props.history.push('/');
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="LoginPage">
				<header>Log In</header>
				<form onSubmit={this.handleSubmit}>
					<input
						type="email"
						placeholder="Email"
						value={this.state.email}
						name="email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						value={this.state.password}
						name="password"
						onChange={this.handleChange}
					/>
					<button>Log In</button>
					<Link to="/">Cancel</Link>
				</form>
			</div>
		);
	}
}

export default LoginPage;
