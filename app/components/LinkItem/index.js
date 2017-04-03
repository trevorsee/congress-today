/**
*
* LinkItem
*
*/

import React from 'react';
import {FaBook, FaComments} from 'react-icons/lib/fa'
import styled from 'styled-components';
import color from 'utils/colors'

const Container = styled.div`
  border-top: 1px ${color.grey.default} solid;
  border-right: ${color.grey.default} 1px solid;
  border-bottom: ${color.grey.default} 1px solid;
  margin: 0 1rem;
`;

const Title = styled.h2`
  color: ${color.main.default};
  font-size: 1rem;
`;

const icons = {
    bill: FaBook,
    roll: FaComments
};

function LinkItem(props) {

  var Icon = icons[props.type];

  console.log(props.item)

  return (
    <Container>
      <Icon />
      {props.type}
      <Title>{props.item[0].bill_id}</Title>
      <div>{props.item[0].official_title}</div>
      <div></div>
    </Container>
  );
}

LinkItem.propTypes = {

};

export default LinkItem;
