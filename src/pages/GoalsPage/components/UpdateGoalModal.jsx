import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import tokenService from '../../../utils/tokenService';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.goalId,
			name: this.props.name,
			hoursPerDay: this.props.hoursPerDay,
      hoursComplete: this.props.hoursComplete,
      hoursGoal: this.props.hoursGoal
		};
	}

	componentDidMount() {
		const options = {
			inDuration: 250,
			outDuration: 250,
			opacity: 0.5,
			dismissible: false,
			startingTop: '4%',
			endingTop: '10%'
		};
		M.Modal.init(this.Modal, options);
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
			.put('http://localhost:3000/api/goals/updateGoal', this.state, options)
			.then(res => {
				console.log(res);
				window.location.reload();
			});
	};

	render() {
		return (
			<div>
				<a
          href="#"
					className="waves-effect waves-light btn-small modal-trigger"
					data-target={'modal' + this.props.id}
				>
					Edit
				</a>

				<div
					ref={Modal => {
						this.Modal = Modal;
					}}
					id={'modal' + this.props.id}
					className="modal"
				>
					<div className="modal-content">
						<h4>Edit Goal</h4>
						<p>{this.props.name}</p>
						<form onSubmit={this.submitHandler}>
							<label htmlFor="name">Edit Goal:</label>
							<input
								type="text"
								value={this.state.name}
								name="name"
								onChange={this.handleChange}
							/>
							<label htmlFor="hoursPerDay">Hours/Day:</label>
							<input
								type="number"
								name="hoursPerDay"
								min="0.5"
								max="168"
								step="0.5"
								value={this.state.hoursPerDay}
								onChange={this.handleChange}
							/>
							<label htmlFor="hoursComplete">Hours Completed:</label>
							<input
								type="number"
								name="hoursComplete"
								min="0.5"
								step="0.5"
								value={this.state.hoursComplete}
								onChange={this.handleChange}
							/>
							<label htmlFor="hoursGoal">Goal:</label>
							<input
								type="number"
								name="hoursGoal"
								min="0.5"
								step="0.5"
								value={this.state.hoursGoal}
								onChange={this.handleChange}
							/>
							<div className="modal-footer">
								<button className="modal-close waves-effect waves-red btn-flat">
									Save
								</button>
								<a className="modal-close waves-effect waves-green btn-flat">
									Cancel
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
