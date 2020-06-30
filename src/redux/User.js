import { createAction, handleActions } from 'redux-actions';

export const setUser = createAction('SET_USER');

const INITIAL_STATE = { data: {} };

export default handleActions({
  [setUser]: (state, { payload }) => ({ ...state, data: payload }),
}, INITIAL_STATE);
