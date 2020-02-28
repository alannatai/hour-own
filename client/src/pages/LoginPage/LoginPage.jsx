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
      this.props.history.push('/user/dashboard');
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className='Login-container'>
				<header>Log In</header>
				<form onSubmit={this.handleSubmit}>
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
					<button className="waves-effect waves-light btn-small">Log In</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Link className="waves-effect waves-light btn-small" to='/'>Cancel</Link>
				</form>
			</div>
		);
	}
}

export default LoginPage;
