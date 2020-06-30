import { createAction, handleActions } from 'redux-actions';

export const actions = { fetchRequest: createAction('FETCH_UPDATE') };

export const selectors = {
  getFetching: (action, state) => state.fetch[action] === 'REQUEST' || false,
  getError: (action, state) => state.fetch[action] === 'FAILURE' || false,
};

const INITIAL_STATE = {};

export default handleActions({
  [actions.fetchRequest]: (state, { payload }) => {
    const { requestName, requestState } = payload;

    return {
      ...state,
      [requestName]: requestState,
    };
  },
}, INITIAL_STATE);
