const { oauth2Client, scopes, google } = require("./googleClient");
const {
  models: { User },
} = require("../db");

const people = google.people("v1");

async function getProfile(id_token) {
  const res = await people.people.get({
    resourceName: "people/me",
    personFields: "names,emailAddresses,coverPhotos,photos",
  });
  const profile = res.data;
  const newUser = {
    googleId: profile.resourceName.slice(7),
    username: profile.names[0].displayName,
    firstName: profile.names[0].givenName,
    lastName: profile.names[0].familyName,
    email: profile.emailAddresses[0].value,
    photo: profile.photos[0].url,
    googleImage: profile.coverPhotos[0].url,
    id_token: id_token,
  };

  try {
    let user = await User.findOne({ where: { googleId: newUser.googleId } });
    if (!user) {
      user = await User.create(newUser);
    } else {
      await User.update(
        { id_token: newUser.id_token },
        { where: { googleId: newUser.googleId } }
      );
    }
  } catch (err) {
    console.error(err);
  }
}

async function getUser(token) {
  try {
    const user = await User.findOne({ where: { id_token: token } });
    if (!user) {
      throw "user not found";
    }
    return user;
  } catch (err) {
    console.error(err);
  }
}

async function clearToken(token) {
  try {
    const user = await User.update(
      { id_token: null },
      { where: { id_token: token } }
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getProfile,
  getUser,
  clearToken,
};
