import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/useBreakPoint';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Container from '@mui/material/Container';
import router from 'routes/router.tsx';
import { theme } from 'theme/theme.ts';
import { AxiosProvider } from './utils/axiosContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <AxiosProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </AxiosProvider>
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
