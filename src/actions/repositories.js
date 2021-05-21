import { createActions } from 'redux-actions';

export const {
  setRepositories
} = createActions(
  'SET_REPOSITORIES'
);

export const fetchRepositories = (payload) => async (dispatch) => {
  try {
    const res = await fetch(`https://api.github.com/users/${payload}/repos`);
    const repositories = await res.json();
    dispatch(setRepositories(repositories));
  } catch (err) {
    console.log('Err', err.message);
  }
}