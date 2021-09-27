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

export const addCard = (listID, content) => {
  return {
    type: ADD_CARD,
    content, 
    list: listID
  };
};

export const addList = (title) => {
  return {
    type: ADD_LIST,
    title
  };
};

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

let listID = 2;
let cardID = 4;

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
      {
        id: 2,
        content: "Another one",
      },
      {
        id: 3,
        content: "Last but not least",
      }
    ],
  },
  {
    title: "Second List",
    id: 1,
    cards: [
      {
        id: 0,
        content: "First Card",
      }
    ],
  }
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.title,
        cards: [],
        id: listID
      }
      listID += 1;
      return [...state, newList];
    // case ADD_CARD:
    //   const newCard = {
    //     id: cardID,
    //     content: action.content,
    //     list: listID
    //   }; 
    //   cardID += 1;
    //   const newState = [...state].map(list=> {
    //     if(list.id === action.listID) {
    //       return {
    //         list, 
    //         cards: [...list.cards, newCard]
    //       };
    //       } else {
    //         return list;
    //       }
    //     });
    //   return newState;
    default:
      return state;
  }
};


