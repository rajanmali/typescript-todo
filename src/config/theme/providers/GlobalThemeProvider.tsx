import React from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@config/theme/global';

type Props = {
  theme: DefaultTheme;
};

export const GlobalThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
