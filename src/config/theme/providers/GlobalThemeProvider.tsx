import { FC } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@config/theme/global';

type Props = {
  theme: DefaultTheme;
};

export const GlobalThemeProvider: FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
