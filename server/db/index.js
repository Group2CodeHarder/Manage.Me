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

Chat.belongsToMany(User, {
  as: "chats",
  through: "user_is_in_chat",
  foreignKey: "user_id",
});
User.belongsToMany(Chat, {
  as: "users",
  through: "user_is_in_chat",
  foreignKey: "chat_id",
});

Project.belongsTo(User, { as: "FreelancerId" });
Project.belongsTo(User, { as: "ClientId" });
User.hasMany(Project);


module.exports = {
  db,
  models: {
    User,
    Message,
    Chat,
    Project,
  },
};
