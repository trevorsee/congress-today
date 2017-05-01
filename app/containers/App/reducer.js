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
  SET_BILLFILTER,
  TOGGLE_MODAL,
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
  billFilter: '',
  filterTabs: [
    { id: 0, label: 'Introduced', isActive: true },
    { id: 1, label: 'Passed in the House', isActive: false },
    { id: 2, label: 'Passed in the Senate', isActive: false },
    { id: 3, label: 'Awaiting Signature', isActive: false },
    { id: 4, label: 'Vetoed', isActive: false },
    { id: 5, label: 'Enacted into Law', isActive: false },
    { id: 6, label: 'All', isActive: false }
  ],
  showModal: false,
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
        .setIn(['messageFeed', 'loading'], false)
    case LOAD_BILLS:
      return state
        .setIn(['billFeed', 'loading'], true)
        .setIn(['billFeed', 'error'], false)
        .setIn(['billFeed', 'items'], false)
    case LOAD_BILLS_SUCCESS:
      return state
        .setIn(['billFeed', 'items'], action.items.results)
        .setIn(['billFeed', 'loading'], false)
    case LOAD_BILLS_ERROR:
      return state
        .setIn(['billFeed', 'error'], action.error)
        .setIn(['billFeed', 'loading'], false)
    case SET_BILLFILTER:
      return state
        .set('billFilter', action.query)
        //This needs to be fixed... was not able to update true/false using an iterator without breaking everything
        .setIn(['filterTabs', 0, 'isActive'], false)
        .setIn(['filterTabs', 1, 'isActive'], false)
        .setIn(['filterTabs', 2, 'isActive'], false)
        .setIn(['filterTabs', 3, 'isActive'], false)
        .setIn(['filterTabs', 4, 'isActive'], false)
        .setIn(['filterTabs', 5, 'isActive'], false)
        .setIn(['filterTabs', 6, 'isActive'], false)
        .setIn(['filterTabs', action.filter, 'isActive'], true)
    case TOGGLE_MODAL:
      return state
        .set('showModal', showModal => !showModal)
    default:
      return state;
  }
}

export default appReducer;
