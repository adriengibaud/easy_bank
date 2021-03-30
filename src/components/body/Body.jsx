import React from 'react';
import Articles from './articles/Articles';
import Features from './features/Features';
import TopPart from './TopPart';

const Body = () => (
  <div style={{ overflow: 'hidden' }}>
    <TopPart />
    <Features />
    <Articles />
  </div>
);

export default Body;
