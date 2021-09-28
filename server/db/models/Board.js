const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { UUID, UUIDV4, INTEGER },
} = Sequelize;

const Board = db.define("board", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  projectId: {
    type: INTEGER,
  },
});

module.exports = Board;
