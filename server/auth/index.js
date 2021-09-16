const router = require('express').Router()
const passport = require('passport')
const { models: { User } } = require('../db')

//google scopes
const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/drive.file',
];

//auth with Google
router.get('/google', passport.authenticate('google', { scope: scopes }))

//google auth callback
router.get('/google/callback', passport.authenticate('google', { 
  failureRedirect: '/'}), (req, res) => {
    res.redirect('/home');
  })
//google logout
router.get('/google/logout', (req, res) => {
  req.logout();
  req.redirect('/');
  })


  
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)}); 
  } catch (err) {
    next(err)
  }
})


router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})

module.exports = router