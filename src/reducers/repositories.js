import { handleActions } from 'redux-actions';

import {
  setRepositories
} from '../actions/repositories';

const InitialState = {
  repositories: [],
  isPending: true,
}


export const repositories = handleActions(
  {
    [setRepositories]: (state, { payload }) => ({
      ...state,
      repositories: payload,
      isPending: false,
    }),
  },
  InitialState,
)
