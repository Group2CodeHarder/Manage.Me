const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { TEXT, UUID, UUIDV4 },
} = Sequelize;

const Card = db.define("Card", {
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
