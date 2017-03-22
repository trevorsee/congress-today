/**
*
* MessageList
*
*/

import React from 'react';
import styled from 'styled-components';
import MessageItem from 'components/MessageItem';

const ListContainer = styled.ul`
  width: 50%;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

function MessageList(props) {
  const messageItems = props.messages.map((message) => {
    return <MessageItem key={message.id} message={message} chamber={props.chamber}/>
  });

  return (
    <ListContainer>
      <List>
        <h1>{props.chamber}</h1>
        {messageItems}
      </List>
    </ListContainer>
  );
}

MessageList.propTypes = {

};

export default MessageList;
