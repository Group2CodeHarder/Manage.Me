import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
// export const me = () => async dispatch => {
//   const token = window.localStorage.getItem(TOKEN)
//   if (token) {
//     const res = await axios.get('/auth/me', {
//       headers: {
//         authorization: token
//       }
//     })
//     return dispatch(setAuth(res.data))
//   }
// }

export const authenticate = () => {
  try {
    history.push("/auth/google/");
    // dispatch(me())
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
