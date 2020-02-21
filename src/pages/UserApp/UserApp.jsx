import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import './UserApp.css';
import Dashboard from '../Dashboard/Dashboard';
import RecurringPage from '../RecurringPage/RecurringPage';
import GoalsPage from '../GoalsPage/GoalsPage';
import ProgressPage from '../ProgressPage/ProgressPage';
import Nav from '../../components/Nav/Nav';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class UserApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: userService.getUser(),
			recurringTasks: undefined,
			recurringHoursTotal: 0,
			goals: undefined,
			finishedGoalHours: 0,
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
				if (res.data.recurringHoursTotal) {
					this.setState({
						user: userService.getUser(),
						recurringTasks: res.data.recurringTasks,
						recurringHoursTotal: res.data.recurringHoursTotal.hours,
						goals: res.data.goals,
						isLoaded: true
					});
				}
				this.setState({
					isLoaded: true
				});
			});
	}

	handleLogout = () => {
		userService.logout();
		this.setState({
			user: null
    });
    window.location.reload();
	};

	deleteRecurringHandler = e => {
		e.preventDefault();
		const options = {
			headers: { Authorization: 'Bearer ' + tokenService.getToken() }
		};
		axios
			.post(
				'http://localhost:3000/api/recurring/deleteRecurring',
				{ id: e.target.id },
				options
			)
			.then(res => {
				console.log(res.data);
				window.location.reload();
			});
	};

	deleteGoalHandler = e => {
		e.preventDefault();
		const options = {
			headers: { Authorization: 'Bearer ' + tokenService.getToken() }
		};
		axios
			.post(
				'http://localhost:3000/api/goals/deleteGoal',
				{ id: e.target.id },
				options
			)
			.then(res => {
				console.log(res.data);
				window.location.reload();
			});
	};

	goalCompleteHandler = e => {
		e.preventDefault();
		const options = {
			headers: { Authorization: 'Bearer ' + tokenService.getToken() }
		};
		axios
			.post(
				'http://localhost:3000/api/goals/completeDailyGoal',
				{ id: e.target.id },
				options
			)
			.then(res => {
				console.log(res.data);
      });

    const newGoals = this.state.goals.map((goal) => (goal._id === e.target.id) ? {...goal, dailyHours: goal.hoursPerDay} : goal);
		this.setState({
			finishedGoalHours: parseFloat(e.target.getAttribute('hours')),
      goals: newGoals,
		});
  };
  
  resetDay = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/admin/resetDay')
      .then(res => {
        console.log(res.data)
        window.location.reload();
      })
  }

	render() {
		if (this.state.isLoaded) {
			return (
				<>
					<Nav handleLogout={this.handleLogout} user={this.state.user} />
					<Route
						path="/user/dashboard"
						render={() =>
							userService.getUser() ? (
								<Dashboard
									recurringHoursTotal={this.state.recurringHoursTotal}
									goals={this.state.goals}
									goalCompleteHandler={this.goalCompleteHandler}
									finishedGoalHours={this.state.finishedGoalHours}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/user/recurring"
						render={() =>
							userService.getUser() ? (
								<RecurringPage
									recurringHoursTotal={this.state.recurringHoursTotal}
									recurringTasks={this.state.recurringTasks}
									deleteRecurringHandler={this.deleteRecurringHandler}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/user/goals"
						render={() =>
							userService.getUser() ? (
								<GoalsPage
									goals={this.state.goals}
									recurringHoursTotal={this.state.recurringHoursTotal}
									deleteGoalHandler={this.deleteGoalHandler}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/user/progress"
						render={() =>
							userService.getUser() ? (
								<ProgressPage
									goals={this.state.goals}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
          {this.state.user.email === 'oyaida@msn.com' ? <button className='reset' onClick={this.resetDay}>Reset Day</button> : null}
				</>
			);
		}
		return <></>;
	}
}

export default UserApp;
