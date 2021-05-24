import { createActions } from 'redux-actions';

export const {
  setRepositories,
} = createActions(
  'SET_REPOSITORIES',
);

export const fetchRepositories = (payload) => async (dispatch) => {
  try {
    const res = await fetch(`https://api.github.com/users/${payload}/repos`);
    const repositories = await res.json();

    if (res.status === 200) {
      dispatch(setRepositories(repositories));
    } else {
      dispatch(setRepositories([]));
    }
  } catch (error) {
    dispatch(setRepositories([]));
  }
};

