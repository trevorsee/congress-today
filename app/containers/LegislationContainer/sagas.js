import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_BILLS, SET_BILLFILTER } from 'containers/App/constants';
import { billsLoaded, billsLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectBillFilter } from 'containers/App/selectors';

export function* getBills() {
  const filter = yield select(makeSelectBillFilter());
  console.log('current filter: ' + filter);
  const billURL = `https://congress.api.sunlightfoundation.com/bills${filter}`;

  try {
    // Call our request helper (see 'utils/request')
    const billFeed = yield call(request, billURL);
    yield put(billsLoaded(billFeed));
  } catch (err) {
    yield put(billsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* billData() {
  // Watches for LOAD_REPOS actions and calls getMessages when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watchLoad = yield takeLatest(LOAD_BILLS, getBills);
  const watchSwitch = yield takeLatest(SET_BILLFILTER, getBills);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watchLoad);
  yield cancel(watchSwitch);
}

// Bootstrap sagas
export default [
  billData,
];
