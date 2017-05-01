/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS, Map, List } from 'immutable';

import {
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_BILLS_SUCCESS,
  LOAD_BILLS,
  LOAD_BILLS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  messageFeed: {
    loading: false,
    error: false,
    houseFeed: [],
    senateFeed: [],
  },
  billFeed: {
    loading: false,
    error: false,
    items: [],
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .setIn(['messageFeed', 'loading'], true)
        .setIn(['messageFeed', 'error'], false)
        .setIn(['messageFeed', 'houseFeed'], false)
        .setIn(['messageFeed', 'senateFeed'], false)
    case LOAD_MESSAGES_SUCCESS:
      return state
        .setIn(['messageFeed', 'houseFeed'], action.houseFeed.results)
        .setIn(['messageFeed', 'senateFeed'], action.senateFeed.results)
        .setIn(['messageFeed', 'loading'], false)
    case LOAD_MESSAGES_ERROR:
      return state
        .setIn(['messageFeed', 'error'], action.error)
        .setIn(['messageFeed', 'loading'], false);
    case LOAD_BILLS:
      return state
        .setIn(['billFeed', 'loading'], true)
        .setIn(['billFeed', 'error'], false)
        .setIn(['billFeed', 'items'], false)
    case LOAD_BILLS_SUCCESS:
      return state
        .setIn(['billFeed', 'items'], action.results)
        .setIn(['billFeed', 'loading'], false)
    case LOAD_BILLS_ERROR:
      return state
        .setIn(['billFeed', 'error'], action.error)
        .setIn(['billFeed', 'loading'], false);
    default:
      return state;
  }
}

export default appReducer;
