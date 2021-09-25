import axios from "axios";

//Action Types

const ADD_EVENTS = "ADD_EVENTS";
const DELETE_EVENT = "DELETE_EVENT";
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
        dateTime: event.startTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: event.endTime,
        timeZone: "America/New_York",
      },
      colorId: 1,
    };

    console.log(event);
    // const res = await axios.get("/api/calendar");
    // const events = res.data;
    // dispatch(_addEvents(events));
  };
};

//Reducer

export const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case ADD_EVENTS:
      return action.events;
    default:
      return state;
  }
};
