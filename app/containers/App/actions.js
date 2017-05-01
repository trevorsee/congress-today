/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
  LOAD_BILLS,
  LOAD_BILLS_SUCCESS,
  LOAD_BILLS_ERROR,
  SET_BILLFILTER,
} from './constants';

export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
  };
}

export function messagesLoaded(houseFeed, senateFeed) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    houseFeed,
    senateFeed,
  };
}

export function messagesLoadingError(error) {
  return {
    type: LOAD_MESSAGES_ERROR,
    error,
  };
}

export function loadBills() {
  return {
    type: LOAD_BILLS,
  };
}

export function billsLoaded(items) {
  return {
    type: LOAD_BILLS_SUCCESS,
    items,
  };
}

export function billsLoadingError(error) {
  return {
    type: LOAD_BILLS_ERROR,
    error,
  };
}

export function setBillFilter(filter) {
  return {
    type: SET_BILLFILTER,
    filter,
  };
}
