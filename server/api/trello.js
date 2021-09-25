const router = require("express").Router();
const url = require("url");
const { OAuth } = require("oauth");

const requestURL = "https://trello.com/1/OAuthGetRequestToken";
const accessURL = "https://trello.com/1/OAuthGetAccessToken";
const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const name = "Manage.Me";
const scope = "read, write";
const expiration = "30days";

const key = process.env.TRELLO_KEY;
const secret = process.env.TRELLO_SECRET;

const oauth_secrets = {};

const login = (req, res) => {
  oauth.getOAuthRequestToken((err, token, tokenSecret, results) => {
    oauth_secrets[token] = tokenSecret;
    res.redirect(
      `${authorizeURL}?oauth_token=${token}&name=${name}&scope=${scope}&expiration=${expiration}`
    );
  });
};

let token, tokenSecret;

var callback = function (req, res) {
  const query = url.parse(req.url, true).query;
  const token = query.oauth_token;
  const tokenSecret = oauth_secrets[token];
  const verifier = query.oauth_verifier;
  oauth.getOAuthAccessToken(
    token,
    tokenSecret,
    verifier,
    function (err, accessToken, accessTokenSecret, results) {
      oauth.getProtectedResource(
        "https://api.trello.com/1/members/me",
        "GET",
        accessToken,
        accessTokenSecret,
        function (err, data, res) {
          res.send(data);
        }
      );
    }
  );
};

router.get("/", (req, res) => {
  try {
    const oauth = new OAuth(
      requestURL,
      accessURL,
      key,
      secret,
      "1.0A",
      loginCallback,
      "HMAC-SHA1"
    );
    res.redirect(oauth);
  } catch (err) {
    console.log(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    await login(req, res);
  } catch (err) {
    console.log(err);
  }
});

router.get("/callback", async (req, res) => {
  try {
    await callback(req, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
