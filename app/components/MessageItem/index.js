/**
*
* MessageItem
*
*/

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import LinkItemContainer from 'containers/LinkItemContainer';

const ItemContainer = styled.li`
  font-size: 1em;
  padding: 0.25em 1em;
`;

const Item = styled.div`
  background: ${props => props.chamber=='house' ? 'green' : 'blue'};
  color: white;
  font-size: 1em;
  margin: 0 0 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


function MessageItem(props) {

  const billItems = props.message.bill_ids.map((item) => {
    return <LinkItemContainer item={item} type='bill' />
  });
  const rollItems = props.message.roll_ids.map((item) => {
    return <LinkItemContainer item={item} type='roll' />
  });
  const legislatorItems = props.message.legislator_ids.map((item) => {
    return <LinkItemContainer item={item} type='legislator' />
  });

  return (
    <div>
      <ItemContainer>
        <div>{moment(props.message.timestamp).format("hh:mm A")}</div>
        <Item chamber={props.chamber}>
          <p>{props.message.update}</p>
        </Item>
      </ItemContainer>
      {billItems}
    </div>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
