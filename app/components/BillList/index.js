/**
*
* BillList
*
*/

import React from 'react';
import styled from 'styled-components';
import BillItem from 'components/BillItem';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Headline = styled.h1`
  margin: 1rem 0 0;
  padding: 0;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.chamber=='house' ? 'green' : 'blue'};
`;

function BillList(props) {
  const listItems = props.bills.map((bill) => {
    return <BillItem key={bill.id} bill={bill} />
  });

  return (
    <ListContainer>
      <List>
        {listItems}
      </List>
    </ListContainer>
  );
}

BillList.propTypes = {

};

export default BillList;
