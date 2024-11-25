import './styles/sanitize.css';

import { ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MarketplacePage from './pages/marketplace-page';
import GlobalStyle from './styles/global-style';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MarketplacePage />
    </ThemeProvider>
  </StrictMode>
);
