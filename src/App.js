import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Dashboard from './pages/Dashboard/Dashboard';
import RecurringPage from './pages/RecurringPage/RecurringPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import userService from './utils/userService';
import tokenService from './utils/tokenService';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: userService.getUser(),
			recurringTasks: undefined,
			recurringHoursTotal: 0,
			isLoaded: false
		};
	}

	componentDidMount() {
		const options = {
			headers: { Authorization: 'Bearer ' + tokenService.getToken() }
		};
		axios
			.get('http://localhost:3000/api/recurring/getRecurring', options)
			.then(res => {
				console.log(res.data);
				if (res.data.recurringHoursTotal) {
					this.setState({
						recurringTasks: res.data.recurringTasks,
						recurringHoursTotal: res.data.recurringHoursTotal.hours,
						isLoaded: true
					});
				}
			});
	}

	handleSignupOrLogin = () => {
		this.setState({
			user: userService.getUser()
		});
	};

	handleLogout = () => {
		userService.logout();
		this.setState({
			user: null
		});
	};

	render() {
		console.log(this.state);
		if (this.state.isLoaded) {
			return (
				<>
					<Nav handleLogout={this.handleLogout} user={this.state.user} />
					<Switch>
						<Route
							exact
							path="/dashboard"
							render={() =>
								userService.getUser() ? (
									<Dashboard
										recurringHoursTotal={this.state.recurringHoursTotal}
									/>
								) : (
									<Redirect to="/login" />
								)
							}
						/>
						<Route
							exact
							path="/recurring"
							render={() =>
								userService.getUser() ? (
									<RecurringPage
										recurringHoursTotal={this.state.recurringHoursTotal}
										recurringTasks={this.state.recurringTasks}
									/>
								) : (
									<Redirect to="/login" />
								)
							}
						/>
						<Route
							exact
							path="/login"
							render={({ history }) => (
								<LoginPage
									history={history}
									handleSignupOrLogin={this.handleSignupOrLogin}
								/>
							)}
						/>
						<Route
							exact
							path="/signup"
							render={({ history }) => (
								<SignupPage
									history={history}
									handleSignupOrLogin={this.handleSignupOrLogin}
								/>
							)}
						/>
					</Switch>
				</>
			);
    }
		return <></>;
	}
}

export default App;
