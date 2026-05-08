import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import shineCraftLogo from '../shinecraft_logo.jpg';

const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']") ?? document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/jpeg';
favicon.href = shineCraftLogo;
document.head.appendChild(favicon);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
