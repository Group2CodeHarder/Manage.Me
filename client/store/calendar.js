import axios from "axios";

//Action Types

const ADD_EVENT = "ADD_EVENT";
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

//Thunks

export const getEvents = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/calendar");
    const events = res.data;
    dispatch(_getEvents(events));
  };
};

//Reducer

export const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    default:
      return state;
  }
};
