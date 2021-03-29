import React from 'react';
import styled from 'styled-components';

const Body = () => (
  <BodyContainer>
    <LeftContainer>
      <Title>Next generation digital banking</Title>
    </LeftContainer>
    <RightContainer>yo</RightContainer>
  </BodyContainer>
);

export default Body;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
