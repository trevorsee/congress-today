import { createSelector } from 'reselect';

/**
 * Direct selector to the legislationContainer state domain
 */
const selectLegislationContainerDomain = () => (state) => state.get('legislationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LegislationContainer
 */

const makeSelectLegislationContainer = () => createSelector(
  selectLegislationContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLegislationContainer;
export {
  selectLegislationContainerDomain,
};
