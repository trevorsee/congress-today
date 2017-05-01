/*
 * Home
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
import ItemModal from 'components/ItemModal';

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  min-height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  background: white;
  padding: 0 1rem;
  position fixed;
  height: calc(100vh - 4rem);
  overflow: hidden;
`;

export default class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalIsOpen: false
    };
  }

  openModal(){
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    console.log(this.props)
    // temp
    //<button onClick={this.openModal}>TESTING</button>
    return (
      <Container>
        <Navigation />
        <Wrapper>
          <MessageList messages={this.props.house} chamber='house'/>
          <MessageList messages={this.props.senate} chamber='senate'/>
          <ItemModal modalIsOpen={this.state.modalIsOpen}
                   onRequestClose={this.closeModal} />
        </Wrapper>
      </Container>
    );
  }
}
