import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InviteButton = ({ text }) => <Button>{text}</Button>;

InviteButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InviteButton;

const Button = styled.button`
  cursor: pointer;
  border-radius: 50px;
  width: 200px;
  height: 55px;
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  border: none;
  font-size: 1em;
`;
