import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Theme
import { theme } from '@config/theme/theme';
import { GlobalThemeProvider } from '@config/theme/providers/GlobalThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalThemeProvider theme={theme}>
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
