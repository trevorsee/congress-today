/**
*
* Navigation
*
*/

import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 1rem;
  height: 2rem;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 2px;
`;

function Navigation() {
  return (
    <NavContainer>
      <a>- Upcoming Votes</a>
      <a href='/'><Title>Today</Title></a>
      <a href='/legislation'>Active Legislation -</a>
    </NavContainer>
  );
}

Navigation.propTypes = {

};

export default Navigation;
