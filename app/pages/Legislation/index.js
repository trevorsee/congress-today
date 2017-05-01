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
         { label: 'Introduced', isActive: true },
         { label: 'Passed in the House', isActive: false },
         { label: 'Passed in the Senate', isActive: false },
         { label: 'Awaiting Signature', isActive: false },
         { label: 'Vetoed', isActive: false },
         { label: 'Enacted into Law', isActive: false },
         { label: 'All', isActive: false }
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
