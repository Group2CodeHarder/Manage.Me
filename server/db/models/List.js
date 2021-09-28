const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { STRING, UUID, UUIDV4, INTEGER },
} = Sequelize;

const List = db.define("list", {
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
  },
  // boardId: {
  //   type: INTEGER,
  // },
});

module.exports = List;
