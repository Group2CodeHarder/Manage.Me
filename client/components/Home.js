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
import Welcome from "./Welcome";
import FinanceGoal from "./FinanceGoal";
import moment from "moment";
import SiteClock from "./SiteClock";

let allViews = Object.keys(Views)
  .map((k) => Views[k])
  .filter((k) => k === "agenda");
const view = { views: { month: false, week: false, day: false, agenda: true } };

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
    const { username, events, currentProjects } = this.props;

    const pebbleColor = {
      color: "#ff945e",
      textAlign: "left"
    };
    const center = {
      textAlign: "center",
    };
    const right = {
      textAlign: "right",
    };

    return (
      <div className="content-wrapper">
        <div className="welcome-module">
          <h2>Welcome, {username}!</h2>
          <hr />
          <br />
        </div>
        <div className= 'home-top'>
        <div className='home-top-left'>
          <div className='home-top-left-container'>
            <div className='home-info-container'>
              <h3>Here's your day at a glance</h3>
              <hr />
              <p><i>It's time to get to work.</i></p>
              <SiteClock />
              <br />
              <h4>Upcoming Deadlines</h4>
              <hr />
              <div>
              {currentProjects.map(project => {
                return (
                  <div key={project.id}>
                    <h3 style={pebbleColor}>{project.name}</h3>
                    <p style= {right}>{project.deadlineMonth} {project.deadlineDate}, {project.deadlineYear}</p>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
          </div>
        <div className='home-top-right'>
          <div className='home-top-right-container'>
            <div className='home-info-container'>
                <Welcome />
            </div>
            <div className='home-info-container'>
                <h4>Financial Goals</h4>
                <hr />
                <FinanceGoal />
            </div>
          </div>
        </div>
        </div>
        <div className='home-bottom-outer'>
        <div className='home-bottom'>
          <div>
            <h2>Calendars</h2>
            <br />
            <h4 style= {center}><Link to="/calendar">View your Full Google Calendar Here</Link></h4>
            <hr />
            
          </div>

        
        <div className="productivity-module">
          
          {events.length && (
            <div className="widget-flex">
              <div className="agenda-widget">
                <h3>Upcoming Agenda</h3>
                <Calendar
                  localizer={localizer}
                  events={events.map((ev) => this.formatEvent(ev))}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500, margin: "50px" }}
                  view={"agenda"}
                />
              </div>
              <hr />
              <div className="week-widget">
                <h3>Your Week</h3>
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
      </div>
      </div>
      </div>



    );
  }
}

const mapState = (state) => {
  const currentProjects = state.projects.filter(project => project.status !== 'Complete') || [];
  return {
    username: state.auth.username,
    isLoggedIn: !!state.auth.id,
    events: state.events.items || [],
    currentProjects: currentProjects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

export default connect(mapState, mapDispatch)(Home);
