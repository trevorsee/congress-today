/**
*
* MessageList
*
*/

import React from 'react';
import color from 'utils/colors'
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

const Headline = styled.h1`
  margin: 1rem 0 0;
  padding: 0rem;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.chamber=='house' ? `${color.main.default}` : `${color.alt.default}`};
`;

function MessageList(props) {
  const messageItems = props.messages.map((message) => {
    return <MessageItem key={message.id} message={message} chamber={props.chamber}/>
  });

  return (
    <ListContainer>
      <List>
        <Headline chamber={props.chamber}>{props.chamber}</Headline>
        {messageItems}
      </List>
    </ListContainer>
  );
}

MessageList.propTypes = {

};

export default MessageList;
