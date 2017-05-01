import { createSelector } from 'reselect';

/**
 * Direct selector to the tabContainer state domain
 */
const selectTabContainerDomain = () => (state) => state.get('tabContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TabContainer
 */

const makeSelectTabContainer = () => createSelector(
  selectTabContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTabContainer;
export {
  selectTabContainerDomain,
};
