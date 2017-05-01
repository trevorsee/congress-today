/**
*
* Tab
*
*/

import React from 'react';

import color from 'utils/colors'
import styled from 'styled-components';

const TabBox = styled.button`
  flex-grow: 1;
  padding: 1rem;
  background: white;
  border-top: ${props => props.active ? `${color.grey.default} 1px solid` : 'none' };
  border-right: ${props => props.active ? `${color.grey.default} 1px solid` : 'none' };
  border-left: ${props => props.active ? `${color.grey.default} 1px solid` : 'none' };
  border-bottom: ${props => props.active ? 'none' : `${color.grey.default} 1px solid`};
  color: ${props => props.active ? `${color.grey.dark}` : `${color.grey.default}`};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${color.grey.medium};
    text-decoration: underline;
  }
`;

function Tab(props) {
  function test(){
  }

  return (
    <TabBox active={props.data.isActive} onClick={test}>
      {props.data.label}
    </TabBox>
  );
}

Tab.propTypes = {

};

export default Tab;
