//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Message = require("./models/Message");
const Chat = require("./models/Chat");
const Project = require("./models/Project");

//associations could go here!

User.hasMany(Message);
Message.belongsTo(User);

Chat.hasMany(Message);
Message.belongsTo(Chat);

Project.belongsTo(User, { as: "FreelancerId" });
Project.belongsTo(User, { as: "ClientId" });
User.hasMany(Project);

//Chat.hasMany(User);//look into creating intermediate table with one to many relationships
//User.hasMany(Chat);

module.exports = {
  db,
  models: {
    User,
    Message,
    Chat,
    Project,
  },
};
