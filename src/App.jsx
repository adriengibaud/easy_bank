import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './utilities/styles/theme.style';
import Header from './components/header/Header';
import GlobalStyle from './utilities/styles/global.style';
import Body from './components/body/Body';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header theme={theme} />
        <Body />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
