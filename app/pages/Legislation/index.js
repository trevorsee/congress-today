/*
 *
 * Legislation
 *
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import request from 'superagent';
 import nocache from 'superagent-no-cache';
 import styled from 'styled-components';

 import BillList from 'components/BillList';
 import TabContainer from 'containers/TabContainer';
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
 `;

 export default class Legislation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
   constructor(props) {
     super(props);
   }

   render() {
     return (
       <Container>
         <Navigation />
         <TabContainer />
         <Wrapper>
           <BillList bills={this.props.bills} />
           <ItemModal modalIsOpen={this.props.isModalShown} />
         </Wrapper>
       </Container>
     );
   }
 }
