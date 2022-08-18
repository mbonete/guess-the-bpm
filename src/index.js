import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameProvider } from './hooks/useGame'
import App from './components/App';
import { LanguageProvider } from './hooks/useTranslation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </LanguageProvider>
    
  </React.StrictMode>
);
