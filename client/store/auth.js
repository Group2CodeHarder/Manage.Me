import axios from "axios";

// ACTION TYPES

const SET_AUTH = "SET_AUTH";

// ACTION CREATORS

const setAuth = (auth) => ({ type: SET_AUTH, auth });


// THUNK CREATORS

export const getUser = () => async dispatch => {
  if (document.cookie) {
    const id_token = document.cookie
      .split('; ')
      .find(row => row.startsWith('session-token='))
      .split('=')[1];
    if (id_token) {
      const res = await axios.get('/auth/google/user', {
        headers: {
          authorization: id_token
        }
      })
      return dispatch(setAuth(res.data))
    };
  };
}

// export const checkAuthenticated = () => {
//   try {
//     const googleId = await axios.get('/auth/google/check');
//     const user = await axios.get('/')
//     // dispatch(me())
//   } catch (err) {
//     console.log(err);
//   }
// };


export const logout = () => dispatch => {
  try {
    axios.get('/auth/google/logout');
    dispatch(setAuth({}))
  } 
  catch (err) {
    console.log(err);
  }
};


// REDUCER

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
