const router = require('express').Router();
const { oauth2Client, scopes, google } = require('./googleClient');
const { getProfile, getUser, clearToken } = require('./authMethods');
const url = require('url');

//authorization route
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

//authorization callback from google
router.get('/callback', async (req, res) => {
  try {
    const qs = new url.URL(req.url, 'http://localhost:8080').searchParams;
    const {tokens} = await oauth2Client.getToken(qs.get('code'));
    oauth2Client.credentials = tokens;
    console.log('Success!!!!!');
    getProfile(tokens.id_token);
    res.cookie('session-token', tokens.id_token)
    res.redirect('/home');
  }
  catch(err) {
    console.error(err);
    res.redirect('/login')
  }
});

//logout of Manage.me
router.get('/logout', (req, res, next) => {
  const token = req.cookies['session-token'];
  clearToken(token);
  res.clearCookie('session-token');
  res.redirect('/login');
});

//auth check
router.get('/check', async (req, res, next) => {
  const cookie = req.cookies['session-token'];
  const tokens = oauth2Client.credentials;
  let status = 'failed';
  if (tokens.id_token === cookie) {
    status = 'passed';
  };
  res.send(status);
});

//get a user
router.get('/user', async (req, res, next) => {
  try {
    const id_token = req.headers.authorization;
    const user = await getUser(id_token);
    res.send(user);
  } 
  catch (err) {
    next(err)
  };
});


module.exports =  router;
