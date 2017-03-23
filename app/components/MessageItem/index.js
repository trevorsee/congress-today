/**
*
* MessageItem
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
  background: ${props => props.chamber=='house' ? 'green' : 'blue'};
  color: white;
  font-size: 1em;
  margin: 0 0 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


function MessageItem(props) {
  return (
    <ItemContainer>
      <div>{moment(props.message.timestamp).format("hh:mm A")}</div>
      <Item chamber={props.chamber}>
        <p>{props.message.update}</p>
      </Item>
    </ItemContainer>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
