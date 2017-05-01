import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_BILLS} from 'containers/App/constants';
import { billsLoaded, billsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getBills() {
  const billURL = `https://congress.api.sunlightfoundation.com/floor_updates?chamber=house`;

  try {
    // Call our request helper (see 'utils/request')
    const billFeed = yield call(request, billURL);
    yield put(billLoaded(billFeed));
  } catch (err) {
    yield put(billLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* feedData() {
  // Watches for LOAD_REPOS actions and calls getMessages when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_BILL, getBills);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  feedData,
];
