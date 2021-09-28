import axios from "axios";

//Action Types

const ADD_EVENTS = "ADD_EVENTS";
const DELETE_EVENTS = "DELETE_EVENTS";
const GET_EVENTS = "GET_EVENTS";
const UPDATE_EVENT = "UPDATE_EVENT";

//Action creators

const _getEvents = (events) => {
  return {
    type: GET_EVENTS,
    events,
  };
};

const _addEvents = (events) => {
  return {
    type: ADD_EVENTS,
    events,
  };
};

const _deleteEvents = (events) => {
  return {
    type: DELETE_EVENTS,
    events,
  };
};

//Thunks

export const getEvents = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/calendar");
    const events = res.data;
    dispatch(_getEvents(events));
  };
};

export const addEvents = (event) => {
  return async (dispatch) => {
    const add = {
      summary: event.title,
      location: "325 Lafayette, Brooklyn, NY 11205",
      description: "",
      start: {
        dateTime: event.start,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: event.end,
        timeZone: "America/New_York",
      },
      colorId: 1,
    };
    try {
      console.log("this is calendar store event", event);
      console.log("this is calendar store add", add);
      await axios.post("/api/calendar", add);
      const res = await axios.get("/api/calendar");
      const events = res.data;
      console.log("console logging events", events);
      dispatch(_getEvents(events));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteEvents = (event) => {
  return async (dispatch) => {
    try {
      console.log(event);
      await axios.delete(`/api/calendar/${event.id}`, event);
      const res = await axios.get("/api/calendar");
      const events = res.data;
      dispatch(_getEvents(events));
    } catch (err) {
      console.log(err);
    }
  };
};

//Reducer

export const calendarReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case DELETE_EVENTS:
      return state.filter((ev) => ev.id !== action.events.id);

    default:
      return state;
  }
};
