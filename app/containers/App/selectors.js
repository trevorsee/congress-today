/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectMessagesLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['messageFeed', 'loading'])
);

const makeSelectMessagesError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['messageFeed', 'error'])
);

const makeSelectHouseFeed = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['messageFeed', 'houseFeed'])
);

const makeSelectSenateFeed = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['messageFeed', 'senateFeed'])
);

const makeSelectBillsLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['billFeed', 'loading'])
);

const makeSelectBillsError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['billFeed', 'error'])
);

const makeSelectBillFeed = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['billFeed', 'items'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectHouseFeed,
  makeSelectSenateFeed,
  makeSelectMessagesLoading,
  makeSelectMessagesError,
  makeSelectBillFeed,
  makeSelectBillsLoading,
  makeSelectBillsError,
  makeSelectLocationState,
};
