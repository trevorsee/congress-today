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
import { makeSelectBillFeed, makeSelectBillsLoading, makeSelectBillsError, makeSelectIsModalShown } from 'containers/App/selectors';
import { loadBills } from '../App/actions';

export class LegislationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadB();
  }
  render() {
    return (
      <Legislation bills={this.props.billFeed} isModalShown={this.props.isModalShown}/>
    );
  }
}

LegislationContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  billFeed: makeSelectBillFeed(),
  billsLoading: makeSelectBillsLoading(),
  billsError: makeSelectBillsError(),
  isModalShown: makeSelectIsModalShown(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadB: () => dispatch(loadBills()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LegislationContainer);
