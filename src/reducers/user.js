import { handleActions } from 'redux-actions';

import {
  setUser
} from '../actions/user';

const InitialState = {
  user: null,
  isPendingUser: true,
}

export const user = handleActions(
  {
    [setUser]: (state, { payload }) => ({
      ...state,
      user: payload,
      isPendingUser: false,
    }),
  },
  InitialState,
);