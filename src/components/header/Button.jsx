/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

const ButtonContainer = styled.div`
  width: 60px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.gradient} bottom / var(--d, 0) 3px no-repeat;
  transition: 0.5s;
  :hover {
    --d: 85%;
  }
`;
