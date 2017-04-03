/**
*
* LinkItem
*
*/

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-top: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  margin: 0 1rem;
`;

function LinkItem(props) {

  return (
    <Container>
      <div>{props.item[0].bill_id}</div>
        <div>{props.item[0].official_title}</div>
    </Container>
  );
}

LinkItem.propTypes = {

};

export default LinkItem;
