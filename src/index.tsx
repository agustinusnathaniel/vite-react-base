import * as React from 'react';
import ReactDOM from 'react-dom/client';

import '@/lib/styles/globals.css';
// fonts
import '@fontsource/plus-jakarta-sans/latin.css';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
