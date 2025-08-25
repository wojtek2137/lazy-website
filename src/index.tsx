import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

// Only load PWA in production to avoid development caching issues
// Check if we're NOT in localhost (development)
const isProduction = !window.location.hostname.includes('localhost') && 
                    !window.location.hostname.includes('127.0.0.1') &&
                    !window.location.hostname.includes('192.168.');

if (isProduction) {
  import('./pwa');
} else {
  console.log('PWA: Skipped loading in development mode (localhost detected)');
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

