import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import budgetingIcon from '../../../assets/icons/icon-budgeting.svg';
import ApiIcon from '../../../assets/icons/icon-api.svg';
import OnboardingIcon from '../../../assets/icons/icon-onboarding.svg';
import OnlineIcon from '../../../assets/icons/icon-online.svg';

const Features = () => (
  <Container>
    <Header>
      <h1>Why Choose Easybank ?</h1>
      <p>
        We leverage Open Banking to turn your bank account into your financial hub. Control your
        finances like never before.
      </p>
    </Header>
    <FeaturesContainer>
      <FeatureCard
        icon={budgetingIcon}
        title="Online Banking"
        description="Our modern web and mobile application allow you to keep track of your finances wherever you are in the world"
      />
      <FeatureCard
        icon={ApiIcon}
        title="Simple Budgeting"
        description="See exactly where your money goes each month. Receive notifications whe you're close to hitting your limits."
      />
      <FeatureCard
        icon={OnboardingIcon}
        title="Fast Onboarding"
        description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
      />
      <FeatureCard
        icon={OnlineIcon}
        title="Open API"
        description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier"
      />
    </FeaturesContainer>
  </Container>
);

export default Features;

const Container = styled.div`
  background: ${(props) => props.theme.colors.LightGrayishBlue};
  min-height: 800px;
  display: flex;
  flex-direction: column;
  padding: 7vh 7vw 7vh 7vw;
  justify-content: space-around;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  max-height: 200px;
  min-height: 150px;
  justify-content: space-evenly;

  h1 {
    font-weight: normal;
    font-size: 45px;
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    color: ${(props) => props.theme.colors.GrayishBlue};
    font-size: 1.2em;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  width: 86vw;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
