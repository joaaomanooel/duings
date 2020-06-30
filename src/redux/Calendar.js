import { createAction, handleActions } from 'redux-actions';

export const addEvent = createAction('ADD_EVENT');

const INITIAL_STATE = { data: [] };

const sortByDate = (a = {}, b = {}) => {
  if (new Date(a.date) > new Date(b.date)) return 1;
  if (new Date(a.date) < new Date(b.date)) return -1;
  return 0;
};

export default handleActions({
  [addEvent]: (state, { payload }) => ({
    ...state,
    data: [...state.data, payload].sort(sortByDate),
  }),
}, INITIAL_STATE);
