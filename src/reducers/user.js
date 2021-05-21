import { handleActions } from 'redux-actions';

import {
  setUserName,
  setUser
} from '../actions/user';

const InitialState = {
  userName: '',
  user: null,
}

export const user = handleActions(
  {
    [setUserName]: (state, { payload }) => ({
      ...state,
      userName: payload,
    }),
    [setUser]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
  },
  InitialState,
);