"use strict";

const {
  db,
  models: { User, Project, Message, Chat },
} = require("../server/db");

const seedUser = require("./seed-user-data.json");
const seedProject = require("./seed-project-data.json");
const seedMessage = require("./seed-message-data.json");
const seedChat = require("./seed-chat-data.json");


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all(seedUser.map((user) => User.create(user)));

  //Creating Projects
  const projects = await Promise.all(
    seedProject.map((project) => Project.create(project))
  );

  // Creating Messages
  const messages = await Promise.all(seedMessage.map((msg) => Message.create(msg)));

  // Creating Chats
  const chats = await Promise.all(seedChat.map((chat) => Chat.create(chat)));


  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users,
    chats,
    messages
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
