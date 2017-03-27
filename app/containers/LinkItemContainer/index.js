/*
 *
 * LinkItemContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LinkItem from 'components/LinkItem';

export class LinkItemContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LinkItem item={this.props.item} type={this.props.type}/>
    );
  }
}

LinkItemContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LinkItemContainer);
