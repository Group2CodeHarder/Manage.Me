import React, { Component } from "react";
import { connect } from "react-redux";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import { addEvents, deleteEvents, getEvents } from "../store/calendar";
import moment from "moment";

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

class BigCal extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", start: "", end: "" };
    this.onChange = this.onChange.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.formatEvent = this.formatEvent.bind(this);
  }
  async componentDidMount() {
    if (this.props.isLoggedIn) {
      await this.props.getEvents();
    }
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  handleAddEvent = () => {
    this.props.addEvents(this.state);
    console.log(this.state);
    this.setState({ title: "", start: "", end: "" });
  };

  formatEvent = (ev) => {
    const res = {
      title: ev.summary,
      start: moment(ev.start.dateTime).toDate(),
      end: moment(ev.end.dateTime).toDate(),
      id: ev.id,
    };

    return res;
  };

  render() {
    const { events } = this.props;
    const test = events.items.map((ev) => {
      ev["start"] = ev["start"];
      ev["end"] = ev["end"];
      ev["id"] = ev["id"];
      ev["title"] = ev["summary"];
      return ev;
    });

    console.log("big cal events", test);
    return (
      <div className="content-wrapper">
        <h1>Calendar</h1>
        <h2> Add New Event </h2>
        <div>
          <input
            type="text"
            placeholder="Add Title"
            style={{ width: "20%", marginRight: "10px" }}
            value={this.state.title}
            onChange={(e) => {
              this.onChange(e);
              console.log(this.state);
            }}
            name="title"
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={this.state.start}
            onChange={(start) => {
              this.setState({ ...this.state, start });
              console.log(this.state);
            }}
            name="start"
            showTimeSelect
            timeFormat="HH:mm"
          />
          <DatePicker
            placeholderText="End Date"
            selected={this.state.end}
            onChange={(end) => {
              this.setState({ ...this.state, end });
              console.log(this.state);
            }}
            name="end"
            showTimeSelect
            timeFormat="HH:mm"
          />
          <button style={{ marginTop: "10px" }} onClick={this.handleAddEvent}>
            {" "}
            Add Event
          </button>
        </div>
        <Calendar
          localizer={localizer}
          events={events.items.map((ev) => this.formatEvent(ev))}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(ev) => {
            this.props.deleteEvents(ev);
          }}
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
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

export default connect(mapState, mapDispatch)(BigCal);
