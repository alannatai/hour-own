const User = require('../models/user');

function addRecurring(req, res) {
  console.log('req.user', req.user)
  console.log('req.body', req.body)

  const recurring = {
    name: req.body.name,
    hours: req.body.hours
  }
  User.findById(req.user._id, function(err, user) {
    user.recurring.push(recurring)
    user.save(function(err) {
      if (err) {
        res.json({err});
      }
      res.json('Recurring hours added')
    })
  })
}

module.exports = {
  addRecurring
}