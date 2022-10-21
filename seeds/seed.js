const connection = require("../config/connection");
const { Thought, User } = require("../models");
const userdata = require("./userdata.json");
const thoughtdata = require("./thoughtdata.json");

connection.once("open", async () => {
  console.log("connected");

  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  await User.insertMany(userdata);

  await Thought.insertMany(thoughtdata);

  // Log out the seed data to indicate what should appear in the database
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
