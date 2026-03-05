import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import './styles/_reset.scss'; 
import './index.scss';

// Using HashRouter so Github pages doesn't result in 404s on refresh or direct link access. 
// For Production, use BrowserRouter and configure the server to handle client side routing properly.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
