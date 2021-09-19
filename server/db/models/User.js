const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");
const { DataTypes: { STRING, UUID, UUIDV4, ENUM } } = Sequelize;

const User = db.define("user", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  googleId: {
    type: STRING,
    // allowNull: false,
  },
  username: {
    type: STRING,
    unique: false,
    allowNull: false,
  },
  password: {
    type: STRING,
  },
  firstName: {
    type: STRING,
    unique: false,
  },
  lastName: {
    type: STRING,
    unique: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  googleImage: {
    type: STRING
  },
  phoneNumber: {
    type: STRING,
  },

  userType: {
    type: ENUM("Freelancer", "Client"),
  },
  jobTitle: {
    type: Sequelize.STRING,
    defaultValue: "NA",
  },
  company: {
    type: Sequelize.STRING,
    defaultValue: "NA",
  },
});

module.exports = User;

/**
 * instanceMethods
 */



/**
 * classMethods
 */
// User.authenticate = async function ({ username, password }) {
//   const user = await this.findOne({ where: { username } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error("Incorrect username/password");
//     error.status = 401;
//     throw error;
//   }
//   return user.generateToken();
// };

// User.findByToken = async function (token) {
//   try {
//     const { id } = await jwt.verify(token, process.env.JWT);
//     const user = User.findByPk(id);
//     if (!user) {
//       throw "nooo";
//     }
//     return user;
//   } catch (ex) {
//     const error = Error("bad token");
//     error.status = 401;
//     throw error;
//   }
// };

/**
 * hooks
 */


// User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
