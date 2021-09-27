const router = require("express").Router();
const { oauth2Client, scopes, google } = require("../auth/googleClient");

const calendar = google.calendar("v3");

router.post("/", (req, res) => {
  try {
    const event = req.body;
    calendar.freebusy.query(
      {
        resource: {
          timeMin: event.start.dateTime,
          timeMax: event.end.dateTime,
          timeZone: "America/New_York",
          items: [{ id: "primary" }],
        },
      },
      (err, res) => {
        if (err) return console.error("free busy error", err);
        const eventsArr = res.data.calendars.primary.busy;
        //code to create a calendar event
        if (eventsArr.length === 0)
          return calendar.events.insert(
            {
              calendarId: "primary",
              resource: event,
            },
            (err) => {
              if (err)
                return console.error("calendar event creation error", err);
              return console.log("calendar event created");
            }
          );
        console.log("sorry i`m busy");
      }
    );
    res.status(201);
  } catch (err) {
    console.log(err);
  }
});

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

router.delete("/:id", async (req, res) => {
  console.log("event api", req.body);
  const resp = await calendar.events.delete({
    calendarId: "primary",
    // Event identifier.
    eventId: req.params.id,
  });
  console.log(res.data);
});

module.exports = router;
