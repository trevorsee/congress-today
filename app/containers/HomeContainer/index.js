/*
 *
 * HomeContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectHomeContainer from './selectors';

import Home from 'pages/Home';
import { makeSelectHouseFeed, makeSelectSenateFeed, makeSelectMessagesLoading, makeSelectMessagesError, makeSelectIsModalShown } from 'containers/App/selectors';
import { loadMessages, toggleModal } from '../App/actions';

export class HomeContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadM();
    console.log(this.props);
  }

  render() {
    return (
      <Home house={this.props.houseFeed} senate={this.props.senateFeed} />
    );
  }
}

HomeContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  houseFeed: makeSelectHouseFeed(),
  senateFeed: makeSelectSenateFeed(),
  messagesLoading: makeSelectMessagesLoading(),
  messagesError: makeSelectMessagesError(),
  isModalShown: makeSelectIsModalShown(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadM: () => dispatch(loadMessages()),
    openModal: () => dispatch(toggleModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
