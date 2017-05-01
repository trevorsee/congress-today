/*
 *
 * LegislationContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLegislationContainer from './selectors';

import Legislation from 'pages/Legislation';
import { makeSelectBillFeed, makeSelectMessagesLoading, makeSelectMessagesError } from 'containers/App/selectors';
import { loadMessages } from '../App/actions';

export class LegislationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

LegislationContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LegislationContainer: makeSelectLegislationContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LegislationContainer);
