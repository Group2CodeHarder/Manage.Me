const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
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
