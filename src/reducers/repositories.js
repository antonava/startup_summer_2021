import { handleActions } from 'redux-actions';

import {
  setRepositories
} from '../actions/repositories';

const InitialState = {
  repositories: [],
  isPendingRepositories: true,
}


export const repositories = handleActions(
  {
    [setRepositories]: (state, { payload }) => ({
      ...state,
      repositories: payload,
      isPendingRepositories: false,
    }),
  },
  InitialState,
)
