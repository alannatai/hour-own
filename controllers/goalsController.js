const User = require('../models/user');

function addGoal(req, res) {
	const goal = {
		name: req.body.name,
    hoursPerDay: req.body.hoursPerDay,
    hoursGoal: req.body.hoursGoal
	};
	User.findById(req.user._id, function(err, user) {
		user.goals.push(goal);
		user.save(function(err) {
			if (err) {
				res.json({ err });
			}
			res.json({ msg: 'Goal added' });
		});
	});
}

function completeDailyGoal(req, res) {
	User.findById(req.user._id, function(err, user) {
		const item = user.goals.find(goal => {
			return goal.id === req.body.id;
		});
		item.hoursComplete += item.hoursPerDay;
		item.dailyHours = item.hoursPerDay;
		user.save(function(err) {
			if (err) {
				res.json({ err });
			}
			res.json({ msg: 'Daily goal complete' });
		});
	});
}

function deleteGoal(req, res) {
	User.findById(req.user._id, function(err, user) {
		const item = user.goals.find(task => {
			return task.id === req.body.id;
		});
		user.goals.splice(user.goals.indexOf(item), 1);
		user.save(function(err) {
			if (err) {
				return res.json({ err });
			}
			res.json({ msg: 'Goal deleted' });
		});
	});
}

function updateGoal(req, res) {
  console.log(req.body);
  console.log(req.user._id)

	User.findOneAndUpdate(
		{
			_id: req.user._id,
			'goals._id': req.body.id
		},
		{
			$set: {
				'goals.$.name': req.body.name,
				'goals.$.hoursPerDay': req.body.hoursPerDay,
				'goals.$.hoursComplete': req.body.hoursComplete,
			}
		},
		function(err, user) {
			if (err) {
        console.log(err);
				return res.json({ err });
			}
			res.json({ msg: 'Goal update successful' });
		}
	);
}

module.exports = {
	addGoal,
	completeDailyGoal,
	deleteGoal,
	updateGoal
};
