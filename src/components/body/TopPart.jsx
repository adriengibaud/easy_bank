import React from 'react';
import styled from 'styled-components';
import InviteButton from '../InviteButton';
import bgImageDesktop from '../../assets/bg-intro-desktop.svg';
import mockups from '../../assets/image-mockups.png';

const TopPart = () => (
  <BodyContainer>
    <TopContainer>
      <LeftContainer>
        <InfoBlock>
          <Title>Next generation digital banking</Title>
          <Subtitle>
            Take your financial life online. You easybank account wil be a one-stop-shop or
            spending, saving, budgeting, investing and much more.
          </Subtitle>
          <InviteButton text="Request Invite" />
        </InfoBlock>
      </LeftContainer>
      <RightContainer bgDesktop={bgImageDesktop}>
        <img src={mockups} alt="" />
      </RightContainer>
    </TopContainer>
  </BodyContainer>
);

export default TopPart;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 3;
`;

const TopContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.VeryLightGrey};
`;

const LeftContainer = styled.div`
  width: 50vw;
  height: 60vh;
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
  img {
    min-height: 100vh;
    position: relative;
    top: -220px;
    right: -15%;
  }
`;
