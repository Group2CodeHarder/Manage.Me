import axios from 'axios';

// ACTION TYPES

const GET_USER_BY_ID = 'GET_USER_BY_ID';

// ACTION CREATORS

const _getUserById = (user) => ({ type: GET_USER_BY_ID, user });

// THUNK CREATORS

export const getUserById = (userId) => {
    return async (dispatch) => {
        const { data: user } = await axios.get(`/api/users/${userId}`);
        dispatch(_getUserById(user));
    };
};


// REDUCER

export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_BY_ID:
            return action.user;
        default:
            return state;
    }
  }