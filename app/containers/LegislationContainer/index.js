/*
 *
 * LegislationContainer
 *
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import request from 'superagent';
 import nocache from 'superagent-no-cache';
 import styled from 'styled-components';

 import BillList from 'components/BillList';
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

 export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
   constructor(props) {
     super(props);

     this.state = {
       list: [],
     }
   }

   componentDidMount() {
     const url = `https://congress.api.sunlightfoundation.com/bills`;
     request.get(url)
            .use(nocache)
            .end( (err, res) => {
              console.log(res);
              this.setState({ list: res.body.results })
            });
   }

   render() {
     return (
       <Container>
         <Navigation />
         <Wrapper>
           <BillList bills={this.state.list} />
         </Wrapper>
       </Container>
     );
   }
 }
