require("dotenv").config();
const mongoose = require("mongoose");

const db = require("./config/database");
const User = require("./models/user");

// async function resetGoalsDaily() {
//   const users = await User.find({});
//   for (user of users) {
//     consol
//     for (goal of users.goals) {
//       goal.dailyHours = 1;
//     }
//     await user.save;
//   }
// }
async function resetGoalsDaily() {
  const x = await User.updateMany(
    { name: "Alanna" },
    { "goals.[1].dailyHours": 1}
  );
  console.log(x);
}

db.once("connected", () => {
  resetGoalsDaily();
});
