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

  // Setup install prompt functionality (disabled - now handled by React components)
  private setupInstallPrompt(): void {
    // Install prompt is now handled by React components
    // Old implementation disabled to prevent conflicts
    
    // Still listen for app installation for analytics
    window.addEventListener('appinstalled', () => {
      console.log('🎵 PWA: Lazy Swing Band app installed successfully!');
      this.isInstalled = true;
    });
  }

  // Show install button (disabled - now handled by React components)
  private showInstallButton(): void {
    // Install button is now handled by React components
    // Old implementation disabled to prevent conflicts
    console.log('🎵 PWA: Install button creation skipped - handled by React components');
  }

  // Hide install button (disabled - now handled by React components)
  private hideInstallButton(): void {
    // Install button is now handled by React components
    console.log('🎵 PWA: Install button hiding skipped - handled by React components');
  }

  // Prompt installation (disabled - now handled by React components)
  private async promptInstall(): Promise<void> {
    // Install prompt is now handled by React components
    console.log('🎵 PWA: Install prompt skipped - handled by React components');
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

  // Show installed notification (disabled - now handled by React components)
  private showInstalledNotification(): void {
    // Install success notification is now handled by React components
    console.log('🎵 PWA: Install success notification skipped - handled by React components');
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

  // Public method to manually trigger install prompt (disabled - now handled by React components)
  public triggerInstall(): void {
    console.log('🎵 PWA: Install trigger skipped - handled by React components');
  }

  // Public method to check if app can be installed (disabled - now handled by React components)
  public canInstall(): boolean {
    console.log('🎵 PWA: Install check skipped - handled by React components');
    return false;
  }

  // Public method to check if app is installed (disabled - now handled by React components)
  public getInstallStatus(): boolean {
    return this.isInstalled;
  }
}

// PWA initialization disabled - now handled by React components
// The old initialization has been replaced with React-based PWA management
console.log('🎵 PWA: Old PWA initialization skipped - using React components instead');

// Export for potential manual usage
(window as any).LazySwingBandPWA = LazySwingBandPWA;

export default LazySwingBandPWA;
