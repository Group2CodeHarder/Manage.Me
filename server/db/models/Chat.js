const db = require("../db");
const Sequelize = require("sequelize");

const Chat = db.define("chat", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Chat;
