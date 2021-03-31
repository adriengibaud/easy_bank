import React from 'react';
import styled from 'styled-components';
import Credits from './Credits';
import Links from './Links';
import Social from './Social';

const Footer = () => (
  <FooterContainer>
    <Social />
    <Links />
    <Credits />
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  height: 200px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0vh 7vw;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    height: 600px;
    padding: 7vh 7vh;
  }
`;
