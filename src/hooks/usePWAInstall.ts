import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showInstallSuccess, setShowInstallSuccess] = useState(false);

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

    // Add event listeners
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Cleanup
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return false;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('🎵 PWA: User accepted the install prompt');
        setShowInstallSuccess(true);
        setTimeout(() => setShowInstallSuccess(false), 3000);
      } else {
        console.log('📱 PWA: User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallButton(false);
      
      return outcome === 'accepted';
    } catch (error) {
      console.error('🚫 PWA: Error during installation:', error);
      return false;
    }
  };

  return {
    canInstall: showInstallButton,
    showInstallSuccess,
    handleInstall
  };
}
