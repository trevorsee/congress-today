import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_MESSAGES } from 'containers/App/constants';
import { messagesLoaded, messagesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getMessages() {
  const houseURL = `https://congress.api.sunlightfoundation.com/floor_updates?chamber=house`;
  const senateURL = `https://congress.api.sunlightfoundation.com/floor_updates?chamber=senate`;

  try {
    // Call our request helper (see 'utils/request')
    const houseFeed = yield call(request, houseURL);
    const senateFeed = yield call(request, senateURL);
    yield put(messagesLoaded(houseFeed, senateFeed));
  } catch (err) {
    yield put(messagesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* feedData() {
  // Watches for LOAD_REPOS actions and calls getMessages when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_MESSAGES, getMessages);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  feedData,
];
