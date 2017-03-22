/**
*
* MessageItem
*
*/

import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  /* Adapt the colors based on primary prop */
  background: ${props => props.chamber=='house' ? 'green' : 'blue'};
  color: white;

  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border-radius: 3px;
`;


function MessageItem(props) {
  return (
    <Item chamber={props.chamber}>
      <p>{props.message.update}</p>
    </Item>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
