import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserApp from './pages/UserApp/UserApp';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LoginSignupLinks from './components/LoginSignupLinks/LoginSignupLinks';
import userService from './utils/userService';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: userService.getUser()
		};
	}

	handleSignupOrLogin = () => {
		this.setState({
			user: userService.getUser()
		});
	};

	render() {
		console.log(this.state);
		return (
			<>
				{this.state.user ? null : <LoginSignupLinks />}
				<Switch>
					<Route
						path="/user"
						render={() =>
							userService.getUser() ? (
								<UserApp user={this.state.user} />
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
}

export default App;
