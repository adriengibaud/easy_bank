/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { VscClose, VscMenu } from 'react-icons/vsc';
import Button from './Button';
import logo from '../../assets/logo.svg';
import InviteButton from '../InviteButton';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer isOpen={open}>
        <img src={logo} alt="" />
        <ButtonList>
          <Button text="Home" />
          <Button text="About" />
          <Button text="Contact" />
          <Button text="Blog" />
          <Button text="Carrer" />
        </ButtonList>
        <InviteButton text="Request Invite" />
        <Icon open={open} onClick={() => setOpen(!open)}>
          {open ? <VscClose size={35} /> : <VscMenu size={35} />}
        </Icon>
      </HeaderContainer>
      <Modal isOpen={open}>
        <ModalContent>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Carrer</li>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background: white;
  z-index: 100;
  justify-content: space-between;
  img {
    margin: auto 4vw auto 4vw;
  }
  button {
    margin: auto 3vw auto 3vw;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`;

const Icon = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
    align-items: center;
    margin-right: 5vw;
  }
`;

const ButtonList = styled.div`
  margin: auto;
  width: 450px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 80px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const fadein = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const Modal = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(78, 77, 78, 0.7) 0%,
      rgba(117, 117, 120, 0.48) 35%,
      rgba(255, 255, 255, 0) 75%
    );
    left: 0;
    right: 0;
    animation: ${fadein} 0.25s linear;
  }
`;

const ModalContent = styled.ul`
  background-color: #fefefe;
  font-size: 18px;
  margin: 5% auto;
  width: 90%;
  text-align: center;
  border-radius: 10px;
  li {
    list-style-type: none;
    color: ${(props) => props.theme.colors.primary};
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
  }
  li:hover {
    background-color: red;
  }
`;
