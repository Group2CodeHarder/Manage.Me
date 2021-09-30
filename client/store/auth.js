import axios from "axios";

// ACTION TYPES

const SET_AUTH = "SET_AUTH";
const UPDATE_PROFILE = "UPDATE_PROFILE";

// ACTION CREATORS

const setAuth = (auth) => ({ type: SET_AUTH, auth });
// const _updateProfile = (user) => ({ type: UPDATE_PROFILE, user });

// THUNK CREATORS

export const getUser = () => async (dispatch) => {
  if (document.cookie) {
    const id_token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session-token="))
      .split("=")[1];
    if (id_token) {
      const res = await axios.get("/auth/google/user", {
        headers: {
          authorization: id_token,
        },
      });
      return dispatch(setAuth(res.data));
    }
  }
};

export const updateProfile = (user) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/profile/editBio/${user.id}`,
      user
    );
    dispatch(setAuth(updated));
    // dispatch(_updateProfile(updated));
    // history.push(`/api/profile`);
  };
};

export const logout = () => (dispatch) => {
  try {
    axios.get("/auth/google/logout");
    dispatch(setAuth({}));
  } catch (err) {
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
