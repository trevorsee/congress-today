/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from 'components/MessageList';
import Searchbar from 'components/Searchbar';
import request from 'superagent';
import nocache from 'superagent-no-cache';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const url = `https://congress.api.sunlightfoundation.com/floor_updates?legislative_day=2017-03-21`;
    request.get(url)
           .use(nocache)
           .end( (err, res) => {
             this.setState({ messages: res.body.results })
           });
  }

  render() {
    return (
      <div>
        <h1>This is HomePage component!</h1>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}
