/*
 *
 * LegislationContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectLegislationContainer from './selectors';
import setBillFilter from './actions';

import Legislation from 'pages/Legislation';
import { makeSelectBillFeed, makeSelectBillsLoading, makeSelectBillsError } from 'containers/App/selectors';
import { loadBills } from '../App/actions';

export class LegislationContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadB();
  }
  render() {
    return (
      <Legislation bills={this.props.billFeed}/>
    );
  }
}

LegislationContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  billFeed: makeSelectBillFeed(),
  billsLoading: makeSelectBillsLoading(),
  billsError: makeSelectBillsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadB: () => dispatch(loadBills()),
    onClickedFilter: (evt, id) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(setBillFilter(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LegislationContainer);
