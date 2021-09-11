const db = require("../db");
const Sequelize = require("sequelize");
const { STRING } = Sequelize;

const Chat = db.define("chat", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Chat;
