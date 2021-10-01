import axios from "axios";

//Action Types

const GET_BOARDS = "GET_BOARDS";
const GET_LISTS = "GET_LISTS";
const GET_CARDS = "GET_CARDS";
const ADD_LIST = "ADD_LIST";
const EDIT_LIST_TITLE = "EDIT_LIST_TITLE";
const DELETE_LIST = "DELETE_LIST";
const ADD_CARD = "ADD_CARD";
const EDIT_CARD = "EDIT_CARD";
const DELETE_CARD = "DELETE_CARD";

//Action creators

export const getBoards = (board) => {
  return {
    type: GET_BOARDS,
    board
  };
};

export const getLists = (lists) => {
  return {
    type: GET_LISTS,
    lists
  };
};

export const addList = (list) => {
  return {
    type: ADD_LIST,
    list
  };
};

export const delList = (list) => {
  return {
    type: DELETE_LIST,
    list
  };
};

export const getCards = (cards) => {
  return {
    type: GET_CARDS,
    cards
  };
};

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card
  };
};

export const delCard = (card) => {
  return {
    type: DELETE_CARD,
    card
  };
};


//Action thunks

export const allBoards = (projectId) => {
  return async (dispatch) => {
      const { data: board } = await axios.get(`/api/boards/${projectId}`);
      const boardId = board.id;
      const { data: lists } = await axios.get(`/api/boards/lists/${boardId}`);
      
      let cards = [];

      for (let i = 0; i <= lists.length; i++) {
        let list = lists[0];
        let listId = list.id;
        console.log(listId)
        // const listCards = await axios.get(`/api/boards/lists/cards/${list.id}`);
        // cards.push(listCards)
      }
      // console.log(cards)
      
      dispatch(getBoards(board));
      dispatch(getLists(lists));
      // dispatch(getCards(cards));
  };
};

export const allLists = (boardId) => {
  return async (dispatch) => {
      const { data: lists } = await axios.get('/api/boards/lists', { params: { boardId} });
      dispatch(getLists(lists));
  };
};

export const newList = (list) => {
  return async (dispatch) => {
      const { data: created } = await axios.post('/api/boards/lists', list);
      dispatch(addList(created));
  };
};

export const deleteList = (list, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/boards/lists/${list.id}`);
    dispatch(delList(list));
    history.push('/lists');
  };
};

export const allCards = (listId) => {
  return async (dispatch) => {
      const { data: cards } = await axios.get('/api/boards/lists/cards', { params: { listId} });
      dispatch(getCards(cards));
  };
};

export const newCard = (card) => {
  return async (dispatch) => {
      const { data: created } = await axios.post(`/api/boards/lists/${card.listId}`, card);
      dispatch(addCard(created));
  };
};

export const deleteCard = (card, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/boards/lists/${card.id}`);
    dispatch(delCard(card));
    history.push('/lists');
  };
};

//Reducer

// const initialState = [
//   {
//     title: "To-Do",
//     id: list.id,
//     cards: []
//   }
// ];

export const boardsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOARDS:
      return action.board;
    default:
      return state;
  }
};

export const listsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LISTS:
      return action.lists; 
    case ADD_LIST:
      return [...state, action.list];
    case DELETE_LIST:
      return state.filter((list) => list.id !== action.list.id);
    default:
      return state;
  }
};

export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CARDS:
      return action.cards;  
    case ADD_CARD:
      return [...state, action.cards];
    case DELETE_CARD:
      return state.filter((card) => card.id !== action.card.id);
    default:
      return state;
  }
};


