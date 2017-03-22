/**
*
* MessageList
*
*/

import React from 'react';
// import styled from 'styled-components';
import MessageItem from 'components/MessageItem';


function MessageList(props) {
  const messageItems = props.messages.map((message) => {
    return <MessageItem key={message.id} message={message} />
  });

  return (
    <ul>
      {messageItems}
    </ul>
  );
}

MessageList.propTypes = {

};

export default MessageList;
