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
  overflow: auto;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 2rem 0 0;
`;

const Headline = styled.h1`
  margin: 1rem 0 2rem;
  padding: 0rem;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.chamber=='house' ? `${color.main.default}` : `${color.alt.default}`};
`;

const HeadlineWrapper = styled.div`
  position: fixed;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%);;
  width: calc(50% - 4rem);
`;

const BottomFade = styled(HeadlineWrapper)`
  bottom: 0;
  background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);;
  height: 3rem;
`;

function MessageList(props) {
  const messageItems = props.messages.map((message) => {
    return <MessageItem key={message.id} message={message} chamber={props.chamber}/>
  });

  return (
    <ListContainer>
      <HeadlineWrapper>
        <Headline chamber={props.chamber}>{props.chamber}</Headline>
      </HeadlineWrapper>
      <List>
        {messageItems}
      </List>
      <BottomFade/>
    </ListContainer>
  );
}

MessageList.propTypes = {

};

export default MessageList;
