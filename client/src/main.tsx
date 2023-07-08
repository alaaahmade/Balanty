import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './themes';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={LightTheme}>
    <App />
  </ThemeProvider>,
);
