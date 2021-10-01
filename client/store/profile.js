import axios from "axios";

// ACTION TYPES

const UPDATE_PROFILE = "UPDATE_PROFILE";

// ACTION CREATORS

const _updateProfile = (user) => ({ type: UPDATE_PROFILE, user });

// THUNK CREATORS

export const updateProfile = (user, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/profile/editBio/${user.id}`,
      user
    );
    dispatch(_updateProfile(updated));
    history.push(`/api/profile/`);
  };
};

// REDUCER

export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return action.user;
    default:
      return state;
  }
}
