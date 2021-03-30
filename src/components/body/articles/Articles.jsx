import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import currencyImage from '../../../assets/articles/image-currency.jpg';
import confettiImage from '../../../assets/articles/image-confetti.jpg';
import planeImage from '../../../assets/articles/image-plane.jpg';
import restaurantImage from '../../../assets/articles/image-restaurant.jpg';

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
        image={restaurantImage}
        author="Wilson Hutton"
        title="Treat yourself without worrying about money"
        text="Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …"
      />
      <ArticleCard
        image={planeImage}
        author="Wilson Hutton"
        title="Take your Easybank card wherever you go"
        text=" We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …"
      />
      <ArticleCard
        image={confettiImage}
        author="Claire Robinson"
        title="Our invite-only Beta accounts are now live!"
        text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ..."
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
