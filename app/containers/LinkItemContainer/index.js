/*
 *
 * LinkItemContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import nocache from 'superagent-no-cache';
import LinkItem from 'components/LinkItem';

export class LinkItemContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      link_object: [],
    }
  }

  componentWillMount() {
    const url = `https://congress.api.sunlightfoundation.com/bills`;
    request.get(url)
           .query({ bill_id: this.props.item })
           .use(nocache)
           .end( (err, res) => {
             this.setState({ link_object: res.body.results })
           });
  }

  render() {
    return (
      <LinkItem item={this.state.link_object} type={this.props.type}/>
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
