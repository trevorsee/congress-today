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
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  houseFeed: [],
  senateFeed: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('houseFeed', false)
        .set('senateFeed', false)
    case LOAD_MESSAGES_SUCCESS:
      return state
        .set('houseFeed', action.houseFeed.results)
        .set('senateFeed', action.senateFeed.results)
        .set('loading', false)
    case LOAD_MESSAGES_ERROR:
      console.log(action);
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
