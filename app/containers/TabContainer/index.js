/*
 *
 * TabContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectBillFilter, makeSelectBillFilterTabs } from 'containers/App/selectors';
import { setBillFilter } from 'containers/App/actions';

import Tab from 'components/Tab';
import color from 'utils/colors'
import styled from 'styled-components';

const ListContainer = styled.nav`
  padding: 0 2rem;
  background: white;
  display: flex;
  justify-content: space-between;
`;

export class TabContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const listItems = this.props.filterTabs.map((tab) => {
      return <div onClick={this.props.onClickTab.bind(this, tab.id)}>
               <Tab key={tab.id} data={tab} />
             </div>
    });

    return (
      <ListContainer>
        {listItems}
        {console.log(this.props)}
      </ListContainer>
    );
  }
}

TabContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  currentFilter: makeSelectBillFilter(),
  filterTabs: makeSelectBillFilterTabs(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickTab: (id) => {
      dispatch(setBillFilter(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
