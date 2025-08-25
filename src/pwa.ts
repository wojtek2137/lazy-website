// PWA functionality for Lazy Swing Band
// Enhanced Progressive Web App features

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

class LazySwingBandPWA {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private isInstalled = false;
  private swRegistration: ServiceWorkerRegistration | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    // Check if already installed
    this.checkInstallStatus();
    
    // Register Service Worker
    await this.registerServiceWorker();
    
    // Setup install prompt
    this.setupInstallPrompt();
    
    // Setup offline indicator
    this.setupOfflineIndicator();
    
    console.log('🎵 Lazy Swing Band PWA initialized');
  }

  // Register Service Worker
  private async registerServiceWorker(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        this.swRegistration = registration;
        
        console.log('🎷 PWA: Service Worker registered successfully', registration);
        
        // Listen for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.showUpdateNotification();
              }
            });
          }
        });

      } catch (error) {
        console.error('🚫 PWA: Service Worker registration failed:', error);
      }
    }
  }

  // Check if app is already installed
  private checkInstallStatus(): void {
    // Check if running in standalone mode (installed)
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone) {
      this.isInstalled = true;
      console.log('📱 PWA: App is running in installed mode');
    }
  }

  // Setup install prompt functionality
  private setupInstallPrompt(): void {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      
      if (!this.isInstalled) {
        this.showInstallButton();
      }
    });

    // Listen for app installation
    window.addEventListener('appinstalled', () => {
      console.log('🎵 PWA: Lazy Swing Band app installed successfully!');
      this.isInstalled = true;
      this.hideInstallButton();
      this.showInstalledNotification();
    });
  }

  // Show install button
  private showInstallButton(): void {
    // Create install button if it doesn't exist
    let installButton = document.getElementById('pwa-install-button');
    
    if (!installButton) {
      installButton = document.createElement('button');
      installButton.id = 'pwa-install-button';
      installButton.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          🎵 <span>Zainstaluj aplikację</span>
        </div>
      `;
      installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ccb379 0%, #d4c285 100%);
        color: #000;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4);
        z-index: 9999;
        font-family: inherit;
        font-size: 14px;
        transition: all 0.3s ease;
        animation: pulse 2s infinite;
      `;
      
      // Add hover effect
      installButton.addEventListener('mouseenter', () => {
        installButton!.style.transform = 'translateY(-2px) scale(1.05)';
        installButton!.style.boxShadow = '0 6px 25px rgba(204, 179, 121, 0.6)';
      });
      
      installButton.addEventListener('mouseleave', () => {
        installButton!.style.transform = 'translateY(0) scale(1)';
        installButton!.style.boxShadow = '0 4px 20px rgba(204, 179, 121, 0.4)';
      });

      installButton.addEventListener('click', () => this.promptInstall());
      
      document.body.appendChild(installButton);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4); }
        50% { box-shadow: 0 4px 30px rgba(204, 179, 121, 0.7); }
        100% { box-shadow: 0 4px 20px rgba(204, 179, 121, 0.4); }
      }
    `;
    document.head.appendChild(style);

    installButton.style.display = 'block';
  }

  // Hide install button
  private hideInstallButton(): void {
    const installButton = document.getElementById('pwa-install-button');
    if (installButton) {
      installButton.style.display = 'none';
    }
  }

  // Prompt installation
  private async promptInstall(): Promise<void> {
    if (!this.deferredPrompt) return;

    try {
      await this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('🎵 PWA: User accepted the install prompt');
      } else {
        console.log('📱 PWA: User dismissed the install prompt');
      }
      
      this.deferredPrompt = null;
      this.hideInstallButton();
      
    } catch (error) {
      console.error('🚫 PWA: Error during installation:', error);
    }
  }

  // Show update notification
  private showUpdateNotification(): void {
    const notification = document.createElement('div');
    notification.id = 'pwa-update-notification';
    notification.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 15px;">
        <div>
          <strong>🎵 Nowa wersja dostępna!</strong><br>
          <small>Odśwież stronę aby załadować najnowszą wersję</small>
        </div>
        <div>
          <button id="pwa-update-button" style="
            background: #ccb379;
            color: #000;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
            margin-right: 8px;
          ">Odśwież</button>
          <button id="pwa-update-dismiss" style="
            background: transparent;
            color: #fff;
            border: 1px solid #666;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
          ">Później</button>
        </div>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      border: 1px solid #ccb379;
      z-index: 10000;
      max-width: 400px;
      font-family: inherit;
      animation: slideDown 0.3s ease;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Handle update button
    document.getElementById('pwa-update-button')?.addEventListener('click', () => {
      this.applyUpdate();
    });

    // Handle dismiss button
    document.getElementById('pwa-update-dismiss')?.addEventListener('click', () => {
      notification.remove();
    });

    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 10000);
  }

  // Apply update
  private applyUpdate(): void {
    if (this.swRegistration?.waiting) {
      this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  }

  // Show installed notification
  private showInstalledNotification(): void {
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 24px; margin-bottom: 8px;">🎵</div>
        <strong>Aplikacja zainstalowana!</strong><br>
        <small>Lazy Swing Band jest teraz dostępny na Twoim urządzeniu</small>
      </div>
    `;
    
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #ccb379 0%, #d4c285 100%);
      color: #000;
      padding: 24px;
      border-radius: 16px;
      z-index: 10000;
      font-family: inherit;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      animation: fadeInScale 0.3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInScale {
        from { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'fadeInScale 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Setup offline indicator
  private setupOfflineIndicator(): void {
    const showOfflineStatus = () => {
      const indicator = document.createElement('div');
      indicator.id = 'offline-indicator';
      indicator.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          📵 <span>Tryb offline - niektóre funkcje mogą być niedostępne</span>
        </div>
      `;
      
      indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #e74c3c;
        color: white;
        padding: 8px;
        text-align: center;
        z-index: 9998;
        font-family: inherit;
        font-size: 14px;
      `;
      
      document.body.appendChild(indicator);
      document.body.style.paddingTop = '40px';
    };

    const hideOfflineStatus = () => {
      const indicator = document.getElementById('offline-indicator');
      if (indicator) {
        indicator.remove();
        document.body.style.paddingTop = '0';
      }
    };

    window.addEventListener('online', hideOfflineStatus);
    window.addEventListener('offline', showOfflineStatus);

    // Check initial state
    if (!navigator.onLine) {
      showOfflineStatus();
    }
  }

  // Public method to manually trigger install prompt
  public triggerInstall(): void {
    this.promptInstall();
  }

  // Public method to check if app can be installed
  public canInstall(): boolean {
    return !!this.deferredPrompt && !this.isInstalled;
  }

  // Public method to check if app is installed
  public getInstallStatus(): boolean {
    return this.isInstalled;
  }
}

// Initialize PWA when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LazySwingBandPWA();
  });
} else {
  new LazySwingBandPWA();
}

// Export for potential manual usage
(window as any).LazySwingBandPWA = LazySwingBandPWA;

export default LazySwingBandPWA;
