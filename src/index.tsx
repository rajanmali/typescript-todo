import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

// Components
import App from './App';
import Header from '@components/layout/header';

// Theme
import { theme } from '@config/theme';

// Global Styles
import GlobalStyle from './assets/styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <Header />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
