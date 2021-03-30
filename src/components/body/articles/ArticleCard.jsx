import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleCard = ({ image, author, title, text }) => (
  <CardContainer>
    <img src={image} alt="" />
    <Content>
      <h6>By {author}</h6>
      <h3>{title}</h3>
      <p>{text}</p>
    </Content>
  </CardContainer>
);

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ArticleCard;

const CardContainer = styled.div`
  background: white;
  width: 315px;
  min-width: 315px;
  border-radius: 10px;

  img {
    border-radius: 10px 10px 0 0;
    max-width: 100%;
  }
`;

const Content = styled.div`
  margin: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.GrayishBlue};
  h6 {
    font-weight: normal;
    font-size: 14px;
  }
  h3 {
    font-weight: normal;
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
  }
`;
