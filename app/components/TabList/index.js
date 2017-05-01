/**
*
* TabList
*
*/

import React from 'react';
import Tab from 'components/Tab';

import color from 'utils/colors'
import styled from 'styled-components';

const ListContainer = styled.nav`
  padding: 0 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
`;

function TabList(props) {
  const listItems = props.tabs.map((tab) => {
    return <Tab key={tab.id} data={tab} />
  });

  return (
    <ListContainer>
      {listItems}
    </ListContainer>
  );
}

TabList.propTypes = {

};

export default TabList;
