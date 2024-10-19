import { createRoot } from 'react-dom/client';

import { GlobalStyles } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';

import ProductPage from './pages/ProductPage/ProductPage.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ProductPage />
  </ThemeProvider>
);
