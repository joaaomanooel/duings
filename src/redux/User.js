import { createAction, handleActions } from 'redux-actions';

export const setUser = createAction('SET_USER');

export const getLocationRequest = createAction('SET_LOCATION');
export const getLocationSuccess = createAction('SET_LOCATION');
export const getLocationFailure = createAction('SET_LOCATION');

const INITIAL_STATE = { data: {}, location: { city_district: '...' } };

export default handleActions({
  [getLocationSuccess]: (state, { payload }) => ({ ...state, location: payload }),
  [getLocationFailure]: state => ({ ...state, location: INITIAL_STATE.location }),
  [setUser]: (state, { payload }) => ({ ...state, data: payload }),
}, INITIAL_STATE);
