const router = require("express").Router();
const {
  models: { User },
} = require("../db");

//google logout
router.get("/google/logout", (req, res) => {
  req.logout();
  req.redirect("/");
});

//logic to make users from google email signin

// async (accessToken, refreshToken, profile, done) => {
//   const newUser = {
//     googleId: profile.id,
//     username: profile.displayName,
//     firsName: profile.name.givenName,
//     lastName: profile.name.familyName,
//     email: profile.emails[0].value,
//     googleImage: profile.photos[0].value,
//   };

//   try {
//     let user = await User.findOne({ where: { googleId: profile.id } });
//     if (user) {
//       done(null, user);
//     } else {
//       user = await User.create(newUser);
//       done(null, user);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };

module.exports = router;
