const User = require('../models/user');

function addGoal(req, res) {
	const goal = {
		name: req.body.name,
		hoursPerDay: req.body.hoursPerDay
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
      return goal.id === req.body.id
    })
    item.hoursComplete += item.hoursPerDay
    user.save(function(err) {
      if (err) {
        res.json({ err })
      }
      res.json({ msg: 'Daily goal complete' })
    })
	});
}

function deleteGoal(req, res) {
  User.findById(req.user._id, function(err, user) {
    const item = user.goals.find(task => {
      return task.id === req.body.id
    })
    user.goals.splice(user.goals.indexOf(item), 1);
    user.save(function(err) {
      if (err) {
        res.json({ err });
      }
      res.json({ msg: 'Goal deleted' })
    })
  })
}

module.exports = {
	addGoal,
  completeDailyGoal,
  deleteGoal
};
