const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");
const {
  DataTypes: { STRING, UUID, UUIDV4, ENUM, TEXT, DECIMAL },
} = Sequelize;

const User = db.define("user", {
  googleId: {
    type: STRING,
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
    type: STRING,
  },
  phoneNumber: {
    type: STRING,
  },
  photo: {
    type: STRING,
  },
  userType: {
    type: ENUM("Freelancer", "Client"),
  },
  jobTitle: {
    type: Sequelize.STRING,
    defaultValue: "N/A",
  },
  company: {
    type: Sequelize.STRING,
    defaultValue: "N/A",
  },
  id_token: {
    type: TEXT,
  },
  bio: {
    type: TEXT,
    defaultValue: "Add some bio to your profile!",
  },
  twitter: {
    type: STRING,
    defaultValue: "https://twitter.com/",
    validate: {
      isUrl: true,
    },
  },
  instagram: {
    type: STRING,
    defaultValue: "https://www.instagram.com/",
    validate: {
      isUrl: true,
    },
  },
  facebook: {
    type: STRING,
    defaultValue: "https://www.facebook.com/",
    validate: {
      isUrl: true,
    },
  },
  linkedIn: {
    type: STRING,
    defaultValue: "https://www.linkedin.com/",
    validate: {
      isUrl: true,
    },
  },
  gitHub: {
    type: STRING,
    defaultValue: "https://github.com/",
    validate: {
      isUrl: true,
    },
  },
  personalSite: {
    type: STRING,
    defaultValue: "Add your personal website!",
  },
  financialGoal: {
    type: DECIMAL,
    defaultValue: 0,
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
