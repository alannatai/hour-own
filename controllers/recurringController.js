const User = require('../models/user');

function getRecurring(req, res) {
	User.findById(req.user._id, function(err, user) {
		if (user.recurring.length > 0) {
			const recurringHoursTotal = user.recurring.reduce(
				(acc, curr) => {
					return { hours: acc.hours + curr.hours };
				},
				{ hours: 0 }
			);
			res.send({
				recurringTasks: user.recurring,
				recurringHoursTotal,
				goals: user.goals
			});
		} else {
			res.send({ msg: 'No recurring tasks yet' });
		}
		if (err) {
			res.json({ err });
		}
	});
}

function addRecurring(req, res) {
	const recurring = {
		name: req.body.name,
		hours: req.body.hours
	};
	User.findById(req.user._id, function(err, user) {
		user.recurring.push(recurring);
		user.save(function(err) {
			if (err) {
				res.json({ err });
			}
			res.json({ msg: 'Recurring hours added' });
		});
	});
}

function deleteRecurring(req, res) {
  User.findById(req.user._id, function(err, user) {
    const item = user.recurring.find(task => {
      return task.id === req.body.id
    })
    user.recurring.splice(user.recurring.indexOf(item), 1);
    user.save(function(err) {
      if (err) {
        res.json({ err });
      }
      res.json({ msg: 'Recurring task deleted' })
    })
  })
}

module.exports = {
	getRecurring,
  addRecurring,
  deleteRecurring
};
