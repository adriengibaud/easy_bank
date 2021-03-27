/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { VscClose } from 'react-icons/vsc';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer isOpen={open}>
        <ButtonList>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Blog</div>
          <div>Carrer</div>
        </ButtonList>

        <Icon onClick={() => setOpen(!open)}>
          <VscClose />
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
`;

const Icon = styled.div`
  font-size: 40px;
  display: none;
  float: right;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  @media screen and (max-width: 600px) {
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
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  right: 0;
  animation: ${fadein} 0.25s linear;
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
    color: red;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
  }
  li:hover {
    background-color: red;
  }
`;
