const connection = require("../config/connection");
const { Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await Thought.get({});

  // Drop existing students
  await User.delete({});

  const users = [];

  // Add users to the collection and await the results
  //await User.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thought: "This is great!",
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
