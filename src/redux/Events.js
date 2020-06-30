import { createAction, handleActions } from 'redux-actions';

export const getEventsRequest = createAction('GET_EVENTS_REQUEST');
export const getEventsSuccess = createAction('GET_EVENTS_SUCCESS');
export const getEventsFailure = createAction('GET_EVENTS_FAILURE');

export const addEventsRequest = createAction('ADD_EVENTS_REQUEST');
export const addEventsSuccess = createAction('ADD_EVENTS_SUCCESS');
export const addEventsFailure = createAction('ADD_EVENTS_FAILURE');

export const updateEventsRequest = createAction('UPDATE_EVENTS_REQUEST');
export const updateEventsSuccess = createAction('UPDATE_EVENTS_SUCCESS');
export const updateEventsFailure = createAction('UPDATE_EVENTS_FAILURE');

export const removeEventsRequest = createAction('REMOVE_EVENTS_REQUEST');
export const removeEventsSuccess = createAction('REMOVE_EVENTS_SUCCESS');
export const removeEventsFailure = createAction('REMOVE_EVENTS_FAILURE');

const INITIAL_STATE = {
  data: [],
};

export default handleActions({}, INITIAL_STATE);
