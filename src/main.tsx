import { ThemeProvider } from '@mui/material';
import AppRoutes from 'app/routes/AppRoutes';
import theme from 'app/themes';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import 'assets/styles/app.sass';
import 'assets/styles/index.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
