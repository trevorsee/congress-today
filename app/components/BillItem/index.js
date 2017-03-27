/**
*
* BillItem
*
*/

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ItemContainer = styled.li`
  font-size: 1em;
  padding: 0.25em 1em;
`;

const Item = styled.div`
  background: purple;
  color: white;
  font-size: 1em;
  margin: 0 0 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


function BillItem(props) {
  return (
    <ItemContainer>
      <div>{moment(props.bill.last_action_at).format("MM-DD-YY hh:mm A")}</div>
      <Item>
        <p>{props.bill.official_title}</p>
      </Item>
    </ItemContainer>
  );
}

BillItem.propTypes = {

};

export default BillItem;
