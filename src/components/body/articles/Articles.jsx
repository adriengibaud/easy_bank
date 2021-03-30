import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import currencyImage from '../../../assets/articles/image-currency.jpg';

const Articles = () => (
  <ArticlesContainer>
    <h1>Latest Articles</h1>
    <CardContainer>
      <ArticleCard
        image={currencyImage}
        author="Claire Robinson"
        title="Receive money in any currency with no fees"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
      />
      <ArticleCard
        image={currencyImage}
        author="Claire Robinson"
        title="Receive money in any currency with no fees"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
      />
      <ArticleCard
        image={currencyImage}
        author="Claire Robinson"
        title="Receive money in any currency with no fees"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
      />
      <ArticleCard
        image={currencyImage}
        author="Claire Robinson"
        title="Receive money in any currency with no fees"
        text="The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
      />
    </CardContainer>
  </ArticlesContainer>
);

export default Articles;

const ArticlesContainer = styled.div`
  padding: 0 7vw;
  background: ${(props) => props.theme.colors.VeryLightGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 800px;
  h1 {
    font-weight: normal;
    color: ${(props) => props.theme.colors.primary};
    font-size: 40px;
    margin: 3vh 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
