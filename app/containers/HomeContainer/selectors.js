import { createSelector } from 'reselect';

/**
 * Direct selector to the homeContainer state domain
 */
const selectHomeContainerDomain = () => (state) => state.get('homeContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomeContainer
 */

const makeSelectHomeContainer = () => createSelector(
  selectHomeContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomeContainer;
export {
  selectHomeContainerDomain,
};
