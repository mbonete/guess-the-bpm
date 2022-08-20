import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameProvider } from './hooks/useGame'
import App from './components/App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
    
  </React.StrictMode>
);
