/**
*
* MessageItem
*
*/

import React from 'react';
import color from 'utils/colors'
import styled from 'styled-components';
import moment from 'moment';
import LinkItemContainer from 'containers/LinkItemContainer';

const ItemContainer = styled.li`
  font-size: 1em;
  padding: 0.25em 1em;
`;

const Item = styled.div`
  background: ${props => props.chamber=='house' ? `linear-gradient(to bottom right,${color.main.default},${color.main.dark})` : `linear-gradient(to bottom right,${color.alt.default},${color.alt.dark})`};
  color: white;
  font-size: 1rem;
  margin: 0 0 1rem;
  padding: 0.25em 1rem;
  border-radius: 6px;
`;

const Timestamp = styled.div`
  padding-left: 1rem;
  font-size: .75rem;
  color: #828282;
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
        <Timestamp>{moment(props.message.timestamp).format("hh:mm A")}</Timestamp>
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
