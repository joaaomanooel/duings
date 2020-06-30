import { createAction, handleActions } from 'redux-actions';

export const getAllEventsRequest = createAction('GET_ALL_EVENTS_REQUEST');
export const getAllEventsSuccess = createAction('GET_ALL_EVENTS_SUCCESS');
export const getAllEventsFailure = createAction('GET_ALL_EVENTS_FAILURE');

export const checkinRequest = createAction('CHECKIN_REQUEST');
export const checkinFailure = createAction('CHECKIN_FAILURE');

const INITIAL_STATE = {
  data: [],
};

export default handleActions({
  [getAllEventsSuccess]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
}, INITIAL_STATE);
