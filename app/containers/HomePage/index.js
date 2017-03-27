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
import request from 'superagent';
import nocache from 'superagent-no-cache';
import styled from 'styled-components';

import MessageList from 'components/MessageList';
import Navigation from 'components/Navigation';

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  min-height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  background: white;
  border-top: 1px solid #BDBDBD
  padding: 0 1rem;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      messages_senate: [],
      messages_house: []
    }
  }

  componentDidMount() {
    const url = `https://congress.api.sunlightfoundation.com/floor_updates`;
    request.get(url)
           .query({ chamber: 'senate' })
           .use(nocache)
           .end( (err, res) => {
             this.setState({ messages_senate: res.body.results })
           });
     request.get(url)
            .query({ chamber: 'house' })
            .use(nocache)
            .end( (err, res) => {
              this.setState({ messages_house: res.body.results })
            });
  }

  render() {
    return (
      <Container>
        <Navigation />
        <Wrapper>
          <MessageList messages={this.state.messages_house} chamber='house'/>
          <MessageList messages={this.state.messages_senate} chamber='senate'/>
        </Wrapper>
      </Container>
    );
  }
}
