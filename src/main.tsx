import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'app/routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import theme from 'app/themes';

// Styles
import 'assets/styles/index.sass';
import 'assets/styles/app.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
