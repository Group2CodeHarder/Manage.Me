const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');

// const people = google.people('v1');
// const calendar = google.calendar('v3');
// const drive = google.drive('v3');

const keyPath = path.join(__dirname, 'oauth2.keys.json');

let keys = {redirect_uris: ['']};
if (fs.existsSync(keyPath)) {
  keys = require(keyPath).web;
}

const oauth2Client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

google.options({auth: oauth2Client});

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/calendar',
  'profile',
];

module.exports = {
    oauth2Client,
    scopes,
    google
}