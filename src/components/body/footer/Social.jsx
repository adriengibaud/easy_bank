import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo white.svg';
import fbIcon from '../../../assets/icons/icon-facebook.svg';
import instaIcon from '../../../assets/icons/icon-instagram.svg';
import pinterestIcon from '../../../assets/icons/icon-pinterest.svg';
import youtubeIcon from '../../../assets/icons/icon-youtube.svg';
import twitterIcon from '../../../assets/icons/icon-twitter.svg';

const Social = () => (
  <SocialContainer>
    <img src={logo} alt="" />
    <SocialLinks>
      <img src={fbIcon} alt="" />
      <img src={youtubeIcon} alt="" />
      <img src={twitterIcon} alt="" />
      <img src={pinterestIcon} alt="" />
      <img src={instaIcon} alt="" />
    </SocialLinks>
  </SocialContainer>
);

export default Social;

const SocialContainer = styled.div`
  width: 200px;
  color: white;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    height: 30px;
  }
`;
