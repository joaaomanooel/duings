import { call, put } from 'redux-saga/effects';
import { events } from '@/services';
import * as EventsActions from '@/redux/Events';
import * as CalendarActions from '@/redux/Calendar';

export function* getAll() {
  try {
    const eventList = yield call(events.getAll);
    yield put(EventsActions.getAllEventsSuccess(eventList.data));
  } catch (error) {
    yield put(EventsActions.getAllEventsFailure());
  }
}

export function* checkin({ payload }) {
  try {
    yield put(CalendarActions.addEvent(payload.event));
    yield call(events.checkin, payload.checkin);
  } catch (error) {
    yield put(EventsActions.checkinFailure());
  }
}
