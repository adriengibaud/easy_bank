import React from 'react';
import Articles from './articles/Articles';
import Features from './features/Features';
import Footer from './footer/Footer';
import TopPart from './TopPart';

const Body = () => (
  <div style={{ overflow: 'hidden' }}>
    <TopPart />
    <Features />
    <Articles />
    <Footer />
  </div>
);

export default Body;
