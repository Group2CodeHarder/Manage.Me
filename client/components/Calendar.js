import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import { addEvents, deleteEvents } from "../store/calendar";
import { CalEvents } from "./CalEvents";

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
  console.log("this is from calendar", props);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    props.addEvents(newEvent);
  };

  const formatEvent = (ev) => {
    const res = {
      title: ev.summary,
      start: ev.start.dateTime.slice(0, 10),
      end: ev.end.dateTime.slice(0, 10),
    };

    return res;
  };

  const test = props.calEvents.map((ev) => formatEvent(ev));
  console.log("this is test", test);
  const runCal = (ev) => {
    return <CalEvents event={ev} />;
  };
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
        events={test}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(ev) => {
          props.deleteEvents(ev);
        }}
        views={["day", "agenda", "work_week", "month"]}
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
    addEvents: (event) => dispatch(addEvents(event)),
    deleteEvents: (event) => dispatch(deleteEvents(event)),
  };
};

export default connect(mapState, mapDispatch)(CalendarComponent);
