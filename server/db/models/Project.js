const { DECIMAL } = require("sequelize");
const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { STRING, UUID, UUIDV4, ENUM, DATE, DECIMAL },
} = Sequelize;

const Project = db.define("project", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: ENUM(
      "Scheduled",
      "In Progress",
      "Awaiting Feedback",
      "On Hold",
      "Invoice Sent",
      "Complete"
    ),
    allowNull: false,
  },
  startDate: {
    type: DATE,
    allowNull: false,
  },
  endDate: {
    type: DATE,
    allowNull: false,
  },
  deadline: {
    type: DATE,
    allowNull: false,
  },
  revenue: {
    type: DECIMAL(10, 2),
    defaultValue: 0,
  },
  expense: {
    type: DECIMAL(10, 2),
    defaultValue: 0,
  },
});

module.exports = Project;
