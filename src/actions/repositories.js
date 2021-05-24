import { createActions } from 'redux-actions';

export const {
  setRepositories,
  setPagination,
} = createActions(
  'SET_REPOSITORIES',
  'SET_PAGINATION',
);

export const fetchRepositories = (payload) => async (dispatch) => {
  try {
    const res = await fetch(`https://api.github.com/users/${payload}/repos`);
    const repositories = await res.json();
    // const data = repositories.slice(0, 4);

    if (res.status === 200) {
      dispatch(setRepositories(repositories));
      // dispatch(setPagination(data));
    } else {
      dispatch(setRepositories([]));
    }
  } catch (error) {
    dispatch(setRepositories([]));
  }
};

