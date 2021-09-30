const Sequelize = require("sequelize");
const db = require("../db");
const {
  DataTypes: { INTEGER, TEXT, STRING, UUID, UUIDV4, ENUM, DECIMAL, NUMBER },
} = Sequelize;

const Project = db.define("project", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  // userId: {
  //   type: INTEGER,
  // },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
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
    validate: {
      notEmpty: true,
    },
  },
  startDate: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 31,
    },
  },
  startMonth: {
    type: ENUM(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ),
    allowNull: false,
  },
  startYear: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 2021,
    },
  },
  deadlineDate: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 31,
    },
  },
  deadlineMonth: {
    type: ENUM(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ),
    allowNull: false,
  },
  deadlineYear: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 2021,
    },
  },
  revenue: {
    type: ENUM(
      "50.00",
      "100.00",
      "250.00",
      "500.00",
      "750.00",
      "1000.00",
      "1250.00",
      "1500.00",
      "1750.00",
      "2000.00"
    ),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  expense: {
    type: DECIMAL,
    defaultValue: 0,
  },
  clientName: {
    type: STRING,
    allowNull: false,
  },
  clientPhone: {
    type: STRING,
  },
  clientEmail: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
});

module.exports = Project;
