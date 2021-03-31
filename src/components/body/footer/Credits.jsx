import React from 'react';
import styled from 'styled-components';
import InviteButton from '../../InviteButton';

const Credits = () => (
  <CreditContainer>
    <InviteButton text="Request Invite" />
    <p>© Easybank. All Rights Reserved</p>
  </CreditContainer>
);

export default Credits;

const CreditContainer = styled.div`
  height: 120px;
  widht: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    align-items: center;
  }
  p {
    color: ${(props) => props.theme.colors.LightGrayishBlue};
    @media screen and (max-width: 640px) {
      text-align: center;
    }
  }
`;
