import axios from "axios";

//Action Types

//GET_BOARD
const ADD_LIST = "ADD_LIST";
const EDIT_LIST_TITLE = "EDIT_LIST_TITLE";
const DELETE_LIST = "DELETE_LIST";
const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";

//Action creators

// const _getEvents = (events) => {
//   return {
//     type: GET_EVENTS,
//     events,
//   };
// };

// const _addEvents = (events) => {
//   return {
//     type: ADD_EVENTS,
//     events,
//   };
// };

//Thunks

// export const getEvents = () => {
//   return async (dispatch) => {
//     const res = await axios.get("/api/calendar");
//     const events = res.data;
//     dispatch(_getEvents(events));
//   };
// };

// export const addEvents = (event) => {
//   return async (dispatch) => {
//     const add = {
//       summary: event.title,
//       location: "325 Lafayette, Brooklyn, NY 11205",
//       description: "",
//       start: {
//         dateTime: event.startTime,
//         timeZone: "America/New_York",
//       },
//       end: {
//         dateTime: event.endTime,
//         timeZone: "America/New_York",
//       },
//       colorId: 1,
//     };

//     console.log(event);
// const res = await axios.get("/api/calendar");
// const events = res.data;
// dispatch(_addEvents(events));
//   };
// };

//Reducer

const initialState = [
  {
    title: "List",
    id: 0,
    cards: [
      {
        id: 0,
        content: "First Card",
      },
      {
        id: 1,
        content: "Rendering a test card",
      },
    ],
  },
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_EVENTS:
    //   return action.events;
    // case ADD_EVENTS:
    //   return action.events;
    default:
      return state;
  }
};
