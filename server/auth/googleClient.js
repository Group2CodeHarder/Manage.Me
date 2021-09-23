const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

// const keyPath = path.join(__dirname, "oauth2.keys.json");

// let keys = { redirect_uris: [""] };
// if (fs.existsSync(keyPath)) {
//   keys = require(keyPath).web;
// }

const oauth2Client = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
  // keys.client_id,
  // keys.client_secret,
  // keys.redirect_uris[0]
);

google.options({ auth: oauth2Client });

const scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/calendar",
  "profile",
];

module.exports = {
  oauth2Client,
  scopes,
  google,
};
