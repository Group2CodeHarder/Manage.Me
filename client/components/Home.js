import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import getDay from "date-fns/getDay";
import { getEvents } from "../store/calendar";
import moment from "moment";

let allViews = Object.keys(Views)
  .map((k) => Views[k])
  .filter((k) => k === "agenda");
const view = { views: { month: false, week: false, day: false, agenda: true } };

console.log("views", Views);
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.formatEvent = this.formatEvent.bind(this);
  }
  async componentDidMount() {
    await this.props.getEvents();
  }

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
    const { username, events } = this.props;

    console.log(events);
    console.log("views", allViews);
    return (
      <div className="content-wrapper">
        <div>
          <h3>Welcome, {username}</h3>

          <Link to="/calendar">Calendar</Link>
        </div>

        {events.length && (
          <div className="widget-flex">
            <div className="agenda-widget">
              <Calendar
                localizer={localizer}
                events={events.map((ev) => this.formatEvent(ev))}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                view={"agenda"}
              />
            </div>
            <div className="week-widget">
              <Calendar
                localizer={localizer}
                events={events.map((ev) => this.formatEvent(ev))}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                view={"week"}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.auth.username,
    isLoggedIn: !!state.auth.id,
    events: state.events.items || [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

export default connect(mapState, mapDispatch)(Home);
