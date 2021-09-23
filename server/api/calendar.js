const router = require("express").Router();
const { oauth2Client, scopes, google } = require("../auth/googleClient");

const calendar = google.calendar("v3");

router.post("/", (req, res) => {});

router.get("/", async (req, res) => {
  const events = await calendar.events.list({
    calendarId: "primary",
    orderBy: "startTime",
    singleEvents: "true",
  });
  res.send(events.data);
});

router.put("/", (req, res) => {
  //freebuys query will go in here
});

router.delete("/", (req, res) => {
  //freebuys query will go in here
});

module.exports = router;
