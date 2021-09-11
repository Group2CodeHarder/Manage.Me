const db = require("../db");
const Sequelize = require("sequelize");

const Message = db.define("message", {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Message;
