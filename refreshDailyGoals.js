require('dotenv').config();
require("./config/database"); 

const User = require("./models/user");

function resetGoalsDaily() {
  User.updateMany({}, { $set: { 'goals.$.dailyHours': 0 } });
}

resetGoalsDaily();
