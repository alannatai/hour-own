const User = require('../models/user');

function getRecurring(req, res) {
	User.findById(req.user._id, function(err, user) {
		if (user.recurring.length > 0) {
			const recurringHoursTotal = user.recurring.reduce((acc, curr) => {
        return { hours: acc.hours + curr.hours }
      }, { hours: 0 });
			res.send({
        recurringTasks: user.recurring,
				recurringHoursTotal
			});
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
			res.json('Recurring hours added');
		});
	});
}

module.exports = {
	getRecurring,
	addRecurring
};
