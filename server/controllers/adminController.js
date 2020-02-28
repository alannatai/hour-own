const User = require('../models/user');

function resetDay(req, res) {
  User.updateMany(
    {},
    {'$set': { "goals.$[].dailyHours": 0}},
    function(err) {
      if (err) {
        console.log(err);
        return res.json({ err });
      }
      res.json({ msg: 'Reset day successful' });
    }
  );
}

module.exports = {
  resetDay,
};
