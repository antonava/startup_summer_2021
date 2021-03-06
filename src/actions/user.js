import { createActions } from 'redux-actions';

export const {
  setUser,
} = createActions(
  'SET_USER',
);

export const fetchUserInfo = (payload) => async (dispatch) => {
  try {
    const res = await fetch(`https://api.github.com/users/${payload}`);
    const user = await res.json();

    if (user.message) {
      dispatch(setUser({}));
    } else {
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setUser({}));
  }
};

