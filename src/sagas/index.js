import { all, takeLatest } from 'redux-saga/effects';

/* ----------------- Types ------------------ */
import * as EventsActions from '@/redux/Events';

/* ----------------- Sagas ------------------ */
import * as EventsSagas from './Events';

/* --------- Connect Types To Sagas --------- */
export default function* root() {
  yield all([
    // EVENTS
    takeLatest(EventsActions.getAllEventsRequest().type, EventsSagas.getAll),
    takeLatest(EventsActions.checkinRequest().type, EventsSagas.checkin),
  ]);
}
