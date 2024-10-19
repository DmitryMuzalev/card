import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/GlobalStyle';
import { Card } from './components/Card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Card />
  </React.StrictMode>
);
