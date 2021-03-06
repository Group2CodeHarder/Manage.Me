import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import { addEvents, deleteEvents, getEvents } from "../store/calendar";

//sets local time zone for calendar to use
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date("2021-9-20"),
    end: new Date("2021-9-20"),
  },
  {
    title: "Vacation",
    start: new Date("2021-9-7"),
    end: new Date("2021-9-10"),
  },
  {
    title: "Conference",
    start: new Date("2021-9-20"),
    end: new Date("2021-9-23"),
  },
];

function CalendarComponent(props) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [state, setState] = useState(props.calEvents);

  useEffect(() => {
    async function pleaseWork() {
      await props.getEvents();
    }
    pleaseWork();
  }, []);

  console.log("this is the state", state);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    props.addEvents(newEvent);
  };

  const formatEvent = (ev) => {
    const res = {
      title: ev.summary,
      start: ev.start.dateTime.slice(0, 10),
      end: ev.end.dateTime.slice(0, 10),
      id: ev.id,
    };

    return res;
  };

  const test = props.calEvents.map((ev) => formatEvent(ev));
  setState(test);
  console.log("this is test", test);
  console.log("this state", state);

  return (
    <div className="content-wrapper">
      <h1>Calendar</h1>
      <h2> Add New Event </h2>

      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => {
            setNewEvent({ ...newEvent, title: e.target.value });
          }}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          {" "}
          Add Event
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={state}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(ev) => {
          props.deleteEvents(ev);
        }}
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

const mapState = (state) => {
  return {
    events: state.events || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
    addEvents: (event) => dispatch(addEvents(event)),
    deleteEvents: (event) => dispatch(deleteEvents(event)),
  };
};

const CalendarComponentWithRouter = withRouter(CalendarComponent);
export default connect(mapState, mapDispatch)(CalendarComponentWithRouter);
