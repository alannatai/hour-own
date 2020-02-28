require("dotenv").config();
const mongoose = require("mongoose");

const db = require("./config/database");
const User = require("./models/user");

async function resetGoalsDaily() {
  await User.updateMany(
    {},
    {'$set': { "goals.$[].dailyHours": 0}}
  );

  mongoose.connection.close()
}

db.once("connected", () => {
  resetGoalsDaily();
});
