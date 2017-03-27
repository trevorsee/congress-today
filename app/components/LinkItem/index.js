/**
*
* LinkItem
*
*/

import React from 'react';
// import styled from 'styled-components';


function LinkItem(props) {

  console.log(props.item[0]);

  return (
    <div>
      {props.type}: {props.item}
    </div>
  );
}

LinkItem.propTypes = {

};

export default LinkItem;
