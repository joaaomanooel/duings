import { all, takeLatest } from 'redux-saga/effects';

/* ----------------- Types ------------------ */
import * as EventsActions from '@/redux/Events';
import * as UserActions from '@/redux/User';

/* ----------------- Sagas ------------------ */
import * as EventsSagas from './Events';
import * as LocationSagas from './Location';

/* --------- Connect Types To Sagas --------- */
export default function* root() {
  yield all([
    // EVENTS
    takeLatest(EventsActions.getAllEventsRequest().type, EventsSagas.getAll),
    takeLatest(EventsActions.checkinRequest().type, EventsSagas.checkin),

    // LOCATION
    takeLatest(UserActions.getLocationRequest().type, LocationSagas.getLocation),
  ]);
}
