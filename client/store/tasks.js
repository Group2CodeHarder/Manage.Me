import axios from "axios";

//Action Types

const GET_BOARDS = "GET_BOARDS";
const GET_LISTS = "GET_LISTS";
const ADD_LIST = "ADD_LIST";
const EDIT_LIST_TITLE = "EDIT_LIST_TITLE";
const DELETE_LIST = "DELETE_LIST";
const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";

//Action creators

export const getBoards = (projectId, boards) => {
  return {
    type: GET_BOARDS,
    boards,
    project: projectId
  };
};

export const getLists = (boardId, lists) => {
  return {
    type: GET_LISTS,
    lists,
    board: boardId
  };
};

// export const addCard = (listID, content) => {
//   return {
//     type: ADD_CARD,
//     content, 
//     list: listID
//   };
// };

export const addList = (boardId, title) => {
  return {
    type: ADD_LIST,
    title,
    board: boardId
  };
};

//Action thunks

export const allBoards = (projectId) => {
  return async (dispatch) => {
      const { data: boards } = await axios.get("/api/boards", { params: { projectId} });
      dispatch(getBoards(boards));
  };
};

export const allLists = (boardId) => {
  return async (dispatch) => {
      const { data: lists } = await axios.get(`/api/projects/${project.id}`, { params: { boardId} });
      dispatch(getLists(lists));
  };
};

export const newList = (title) => {
  return async (dispatch) => {
      const { data: created } = await axios.post(`/api/projects/:id/${boardId}`, title);
      dispatch(addList(created));
  };
};

//Reducer

const initialState = [
  {
    title: "To-Do",
    id: 0,
    cards: []
  }
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return action.boards;
      case GET_LISTS:
      return action.lists;
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


