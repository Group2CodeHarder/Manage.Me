const router = require("express").Router();
const { models: { User } } = require("../db");
const fs = require('fs');
const path = require('path');
const url = require('url');
const {google} = require('googleapis');

const people = google.people('v1');
const calendar = google.calendar('v3');
const drive = google.drive('v3');

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

router.get('/', (req, res) => {
  try {
    const authorizeUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' '),
    });
    res.redirect(authorizeUrl)  
  }
  catch (err) {
    console.error(err);
  }
})

router.get('/callback', async (req, res) => {
  try {
    const qs = new url.URL(req.url, 'http://localhost:8080').searchParams;
    const {tokens} = await oauth2Client.getToken(qs.get('code'));
    oauth2Client.credentials = tokens;
    console.log('Success!!!!!');
    getProfile(oauth2Client);
    res.redirect('http://localhost:8080/home');
  }
  catch(err) {
    console.error(err);
    res.redirect('http://localhost:8080')
  }
})


// router.get("/google/logout", (req, res) => {
//   req.logout();
//   req.redirect("/");
// });


async function getProfile() {
  const res = await people.people.get(
    {
    resourceName: 'people/me',
    personFields: 'names,emailAddresses,coverPhotos,calendarUrls',
    }
  );
  const profile = res.data;
  const newUser = {
    googleId: profile.resourceName.slice(7),
    username: profile.names[0].displayName,
    firstName: profile.names[0].givenName,
    lastName: profile.names[0].familyName,
    email: profile.emailAddresses[0].value,
    googleImage: profile.coverPhotos[0].url
  }
  try {
    let user = await User.findOne({ where: { googleId: profile.resourceName.slice(7) } });
      if (!user) {
        user = await User.create(newUser);  
      }
      return user;
  } 
  catch (err) {
    console.error(err);
  };
}

module.exports =  router;






//OLD GOOGLE STUFF

// const http = require('http');
// const opn = require('open');
// const destroyer = require('server-destroy');


// async function authenticate(scopes) {
//   return new Promise((resolve, reject) => {
//     // grab the url that will be used for authorization
//     const authorizeUrl = oauth2Client.generateAuthUrl({
//       access_type: 'offline',
//       scope: scopes.join(' '),
//     });
   
//     const server = http
//       .createServer(async (req, res) => {
//         try {
//           if (req.url.indexOf('/auth/google/callback') > -1) {
//             const qs = new url.URL(req.url, 'http://localhost:3000')
//               .searchParams;
//             res.end('Authentication successful! Please return to the console.');
//             server.destroy();
//             const {tokens} = await oauth2Client.getToken(qs.get('code'));
//             oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
//             resolve(oauth2Client);
//           }
//         } catch (e) {
//           reject(e);
//         }
//       })
//       .listen(3000, () => {
//         // open the browser to the authorize url to start the workflow
//         opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
//       });
//     destroyer(server);
//   });
// }

// authenticate(scopes)
//   .then(client => runSample(client))
//   .catch(console.error);