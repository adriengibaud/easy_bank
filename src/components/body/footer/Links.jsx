import React from 'react';
import styled from 'styled-components';

const Links = () => (
  <LinksContainer>
    <p>About Us</p>
    <p>Careers</p>
    <p>Contact</p>
    <p>Support</p>
    <p>Blog</p>
    <p>Privacy Policy</p>
  </LinksContainer>
);

export default Links;

const LinksContainer = styled.div`
  height: 120px;
  color: ${(props) => props.theme.colors.VeryLightGrey};
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: auto;
  align-items: center;
  @media screen and (max-width: 640px) {
    justify-items: center;
  }
`;
