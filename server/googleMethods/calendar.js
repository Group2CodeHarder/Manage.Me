

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);
const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);
const event = {
  summary: "Meeting with David",
  location: "325 Lafayette, Brooklyn, NY 11205",
  description: "Meeting with David to talk about the new project",
  start: {
    dateTime: eventStartTime,
    timeZone: "America/New_York",
  },
  end: {
    dateTime: eventEndTime,
    timeZone: "America/New_York",
  },
  colorId: 1,
};

calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
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
          if (err) return console.error("calendar event creation error", err);
          return console.log("calendar event created");
        }
      );
    console.log("sorry i`m busy");
  }
)