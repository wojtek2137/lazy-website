import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from '../config/theme';

// Styled components for PWA features
const PWAContainer = styled('div')`
  position: relative;
`;

const OfflineBanner = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 12px;
  text-align: center;
  z-index: 9999;
  font-family: ${fonts.mulish.Medium};
  font-size: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.3s ease;
  
  @keyframes slideDown {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
`;



const UpdateNotification = styled('div')`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  border: 1px solid ${colors.primary.gold};
  z-index: 10000;
  max-width: 400px;
  font-family: ${fonts.mulish.Medium};
  animation: slideDown 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 480px) {
    left: 16px;
    right: 16px;
    transform: none;
    max-width: none;
  }
`;

const UpdateButtons = styled('div')`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  
  button {
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-family: ${fonts.mulish.Bold};
    font-size: 12px;
    transition: all 0.2s ease;
    
    &.primary {
      background: ${colors.primary.gold};
      color: #000;
      
      &:hover {
        background: #d4c285;
        transform: translateY(-1px);
      }
    }
    
    &.secondary {
      background: transparent;
      color: white;
      border: 1px solid #666;
      
      &:hover {
        border-color: ${colors.primary.gold};
        background: rgba(204, 179, 121, 0.1);
      }
    }
  }
`;



const PWAManager: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Handle online/offline status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    // Register Service Worker and handle updates
    const registerServiceWorker = async () => {
      // Skip Service Worker registration in development to avoid caching issues
      const isProduction = !window.location.hostname.includes('localhost') && 
                          !window.location.hostname.includes('127.0.0.1') &&
                          !window.location.hostname.includes('192.168.');
      
      if ('serviceWorker' in navigator && isProduction) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          setSwRegistration(registration);

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setShowUpdateNotification(true);
                }
              });
            }
          });

        } catch (error) {
          console.error('PWA: Service Worker registration failed:', error);
        }
      } else {
        console.log('PWA: Service Worker registration skipped in development mode (localhost detected)');
      }
    };

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Register Service Worker
    registerServiceWorker();

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);



  const handleUpdateClick = () => {
    if (swRegistration?.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  const handleUpdateDismiss = () => {
    setShowUpdateNotification(false);
  };

  return (
    <PWAContainer>
      {/* Offline Banner */}
      {isOffline && (
        <OfflineBanner>
          📵 Tryb offline - niektóre funkcje mogą być niedostępne
        </OfflineBanner>
      )}

      {/* Update Notification */}
      {showUpdateNotification && (
        <UpdateNotification>
          <div>
            <strong>🎵 Nowa wersja dostępna!</strong><br />
            <small>Odśwież stronę aby załadować najnowszą wersję</small>
          </div>
          <UpdateButtons>
            <button className="primary" onClick={handleUpdateClick}>
              Odśwież
            </button>
            <button className="secondary" onClick={handleUpdateDismiss}>
              Później
            </button>
          </UpdateButtons>
        </UpdateNotification>
      )}


    </PWAContainer>
  );
};

export default PWAManager;
