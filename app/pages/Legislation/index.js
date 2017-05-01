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
 import TabList from 'components/TabList';
 import Navigation from 'components/Navigation';

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

     this.state = {
       tabs: [
         { id: 0, label: 'Introduced', isActive: true },
         { id: 1, label: 'Passed in the House', isActive: false },
         { id: 2, label: 'Passed in the Senate', isActive: false },
         { id: 3, label: 'Awaiting Signature', isActive: false },
         { id: 4, label: 'Vetoed', isActive: false },
         { id: 5, label: 'Enacted into Law', isActive: false },
         { id: 6, label: 'All', isActive: false }
       ]
     }
   }

   render() {
     return (
       <Container>
         <Navigation />
         <TabList tabs={this.state.tabs} />
         <Wrapper>
           <BillList bills={this.props.bills} />
         </Wrapper>
       </Container>
     );
   }
 }
