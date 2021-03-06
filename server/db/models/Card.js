const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { TEXT, UUID, UUIDV4, INTEGER },
} = Sequelize;

const Card = db.define("card", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  content: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
});

module.exports = Card;
