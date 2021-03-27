import React from 'react';
import BodyTest from './components/BodyTest';
import Header from './components/header/Header';
import GlobalStyle from './utilities/styles/global.style';

function App() {
  return (
    <>
      <Header />
      <BodyTest />
      <GlobalStyle />
    </>
  );
}

export default App;
