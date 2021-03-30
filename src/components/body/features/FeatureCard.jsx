import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FeatureCard = ({ icon, title, description }) => (
  <CardContainer>
    <img src={icon} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
  </CardContainer>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;

const CardContainer = styled.div`
  margin-top: 25px;
  height: 300px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 90px;
  }
  h2 {
    font-weight: normal;
    font-size: 1.8em;
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    color: ${(props) => props.theme.colors.GrayishBlue};
  }
`;
