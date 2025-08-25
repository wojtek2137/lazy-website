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

const InstallButton = styled('button')`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, ${colors.primary.gold} 0%, #d4c285 100%);
  color: #000;
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4);
  z-index: 9998;
  font-family: ${fonts.mulish.Bold};
  font-size: 14px;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 25px rgba(204, 179, 121, 0.6);
  }
  
  @keyframes pulse {
    0% { box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4); }
    50% { box-shadow: 0 4px 30px rgba(204, 179, 121, 0.7); }
    100% { box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4); }
  }
  
  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    padding: 10px 16px;
    font-size: 13px;
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

const InstallSuccessNotification = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, ${colors.primary.gold} 0%, #d4c285 100%);
  color: #000;
  padding: 24px;
  border-radius: 16px;
  z-index: 10000;
  font-family: ${fonts.mulish.Bold};
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: fadeInScale 0.3s ease;
  
  @keyframes fadeInScale {
    from { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
    to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
`;

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const PWAManager: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [showInstallSuccess, setShowInstallSuccess] = useState(false);
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Check if app is already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                       (window.navigator as any).standalone;

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      
      if (!isInstalled) {
        setShowInstallButton(true);
      }
    };

    // Handle app installation
    const handleAppInstalled = () => {
      setShowInstallButton(false);
      setDeferredPrompt(null);
      setShowInstallSuccess(true);
      
      setTimeout(() => setShowInstallSuccess(false), 3000);
    };

    // Handle online/offline status
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    // Register Service Worker and handle updates
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
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
      }
    };

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Register Service Worker
    registerServiceWorker();

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('🎵 PWA: User accepted the install prompt');
      } else {
        console.log('📱 PWA: User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallButton(false);
      
    } catch (error) {
      console.error('🚫 PWA: Error during installation:', error);
    }
  };

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

      {/* Install Button */}
      {showInstallButton && (
        <InstallButton onClick={handleInstallClick}>
          🎵 Zainstaluj aplikację
        </InstallButton>
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

      {/* Install Success Notification */}
      {showInstallSuccess && (
        <InstallSuccessNotification>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎵</div>
          <strong>Aplikacja zainstalowana!</strong><br />
          <small>Lazy Swing Band jest teraz dostępny na Twoim urządzeniu</small>
        </InstallSuccessNotification>
      )}
    </PWAContainer>
  );
};

export default PWAManager;
