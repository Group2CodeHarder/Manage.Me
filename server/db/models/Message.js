const db = require("../db");
const Sequelize = require("sequelize");
const { STRING } = Sequelize;

const Message = db.define("message", {
  content: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Message;
