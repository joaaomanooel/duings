import { call, put } from 'redux-saga/effects';
import { location } from '@/services';
import * as UserActions from '@/redux/User';

export function* getLocation({ payload }) {
  try {
    const { latitude, longitude } = payload;
    const lacalization = yield call(location.getLocation, { latitude, longitude });
    if (lacalization.status === 200) {
      yield put(UserActions.getLocationSuccess({
        formatted: lacalization.data.formatted,
        ...lacalization.data.components,
        longitude,
        latitude,
      }));
    }
  } catch (error) {
    yield put(UserActions.getLocationFailure());
  }
}
