/**
*
* MessageItem
*
*/

import React from 'react';
// import styled from 'styled-components';


function MessageItem(message) {
  return (
    <li>
      <p>{message.message.update}</p>
    </li>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
