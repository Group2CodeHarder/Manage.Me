const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { STRING, UUID, UUIDV4 },
} = Sequelize;

const List = db.define("List", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
});

module.exports = List;
