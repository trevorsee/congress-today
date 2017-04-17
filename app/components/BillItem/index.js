/**
*
* BillItem
*
*/

import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons/lib/fa/book'
import color from 'utils/colors'
import moment from 'moment';

const ItemContainer = styled.li`
  font-size: 1em;
  padding: 0.25em 1em;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  margin: 0 0 1em;
  padding: 0.25em 1em;
  border-bottom: 1px black solid;
`;

const TitleWrapper = styled.div`
  max-width: 50%;
`;

const Id = styled.h2`
  text-decoration: underline;
  font-size: 1rem;
  color: ${props => props.chamber=='house' ? `${color.main.default}` : `${color.alt.default}`};
`;

const Title = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SponsorWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${color.grey.default};
  border-radius: 50%;
`;

const IconWrapper = styled.div`
  color: ${props => props.chamber=='house' ? `${color.main.default}` : `${color.alt.default}`};
`;



function BillItem(props) {
  return (
    <ItemContainer>
      <div>Last Action: {moment(props.bill.last_action_at).format("MM-DD-YY hh:mm A")}</div>
      <Item>
        <IconWrapper chamber={props.bill.chamber}>
          <Icon size={50} />
        </IconWrapper>
        <TitleWrapper>
          <Id chamber={props.bill.chamber}>{props.bill.bill_id}</Id>
          <Title>{props.bill.official_title}</Title>
        </TitleWrapper>
        <p>{props.bill.committee_ids[0]}</p>
        <p>{props.bill.introduced_on}</p>
        <SponsorWrapper />
        <SponsorWrapper />
      </Item>
    </ItemContainer>
  );
}

BillItem.propTypes = {

};

export default BillItem;
