import React from 'react';
import styled from 'styled-components';
import InviteButton from '../InviteButton';
import bgImageDesktop from '../../assets/bg-intro-desktop.svg';
import bgImageMobile from '../../assets/bg-intro-mobile.svg';
import mockups from '../../assets/image-mockups.png';

const TopPart = () => (
  <TopContainer>
    <LeftContainer>
      <InfoBlock>
        <Title>Next generation digital banking</Title>
        <Subtitle>
          Take your financial life online. You easybank account wil be a one-stop-shop or spending,
          saving, budgeting, investing and much more.
        </Subtitle>
        <InviteButton text="Request Invite" />
      </InfoBlock>
    </LeftContainer>
    <RightContainer bgDesktop={bgImageDesktop} bgMobile={bgImageMobile}>
      <img src={mockups} alt="" />
    </RightContainer>
  </TopContainer>
);

export default TopPart;

const TopContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  padding-bottom: 3vh;
  background: ${(props) => props.theme.colors.VeryLightGrey};
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 50vw;
  height: 60vh;
  @media screen and (max-width: 640px) {
    width: 100vw;
    padding-top: 100px;
    height: auto;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 70%;
  position: relative;
  top: 50%;
  margin-left: 7vw;
  transform: translateY(-50%);
  @media screen and (max-width: 640px) {
    transform: translateY(0%);
    text-align: center;
    align-items: center;
    margin: auto;
  }
`;

const Title = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 3vh;
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.GrayishBlue};
  margin-bottom: 3vh;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${(props) => props.bgDesktop});
  background-position: 16% 65%;
  background-repeat: no-repeat;
  background-size: 150%;
  width: 50vw;
  height: 60vh;
  @media screen and (max-width: 640px) {
    background-image: url(${(props) => props.bgMobile});
    background-position: 0% 50%;
    background-size: 100%;
    width: 100vw;
    height: 40vh;
  }
  img {
    height: 100vh;
    position: relative;
    top: -220px;
    right: -15%;
    @media screen and (max-width: 640px) {
      position: static;
      height: 450px;
      margin-left: auto;
      margin-right: auto;
      margin-top: -20%;
    }
  }
`;
