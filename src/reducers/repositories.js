import { handleActions } from 'redux-actions';

import {
  // setPagination,
  setRepositories,
} from '../actions/repositories';

const InitialState = {
  repositories: [],
  // pagination: [],
  isPendingRepositories: true,
};

export const repositories = handleActions(
  {
    [setRepositories]: (state, { payload }) => ({
      ...state,
      repositories: payload,
      isPendingRepositories: false,
    }),
    // [setPagination]: (state, { payload }) => ({
    //   ...state,
    //   pagination: payload,
    // }),
  },
  InitialState,
);
