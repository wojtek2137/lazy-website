// Service Worker for Lazy Swing Band PWA
// Version 1.0 - Full PWA Support

const CACHE_NAME = 'lazy-swing-band-v1.0';
const RUNTIME_CACHE = 'lazy-swing-runtime-v1.0';

// Files to cache immediately (Critical resources)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-color.png',
  '/logo192.png', 
  '/logo512.png',
  '/favicon.png',
  '/robots.txt',
  '/sitemap.xml'
];

// Runtime cache patterns for dynamic content
const RUNTIME_CACHE_PATTERNS = [
  // Images
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  // Fonts
  /\.(?:woff|woff2|ttf|otf)$/,
  // Audio files (important for band website)
  /\.(?:mp3|wav|ogg|m4a)$/,
  // Video files
  /\.(?:mp4|webm|avi)$/,
  // CSS and JS
  /\.(?:css|js)$/
];

// External domains to cache (CDNs, etc.)
const EXTERNAL_CACHE_DOMAINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'open.spotify.com',
  'music.youtube.com',
  'www.youtube.com'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('🎵 Lazy Swing Band PWA: Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🎷 PWA: Caching critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('🎺 PWA: Critical resources cached successfully');
        // Force activation
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('🚫 PWA: Failed to cache critical resources:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🎵 Lazy Swing Band PWA: Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('🗑️ PWA: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('🎼 PWA: Service Worker activated and ready');
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - handle network requests with cache strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests with appropriate strategies
  
  // 1. HTML Pages - Network First (fresh content preferred)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }
  
  // 2. Images, Fonts, Audio/Video - Cache First (performance priority)
  if (RUNTIME_CACHE_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(cacheFirstStrategy(request));
    return;
  }
  
  // 3. External resources (CDNs, Spotify, YouTube) - Stale While Revalidate
  if (EXTERNAL_CACHE_DOMAINS.some(domain => url.hostname.includes(domain))) {
    event.respondWith(staleWhileRevalidateStrategy(request));
    return;
  }
  
  // 4. API calls or other dynamic content - Network First
  event.respondWith(networkFirstStrategy(request));
});

// Cache Strategies Implementation

// Network First - Try network, fallback to cache (good for HTML, API calls)
async function networkFirstStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache the fresh response
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('🌐 PWA: Network failed, trying cache for:', request.url);
    
    // Network failed, try cache
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If no cache and it's a page request, return offline page
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Cache First - Try cache, fallback to network (good for static assets)
async function cacheFirstStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('📥 PWA: Failed to fetch and cache:', request.url);
    throw error;
  }
}

// Stale While Revalidate - Return cache immediately, update in background
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  
  // Fetch fresh version in background
  const networkResponsePromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => {
      // Network failed, that's ok for this strategy
    });
  
  // Return cached version immediately, or wait for network if no cache
  return cachedResponse || networkResponsePromise;
}

// Handle background sync for offline actions (future feature)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Placeholder for future contact form offline sync
  console.log('🔄 PWA: Background sync for contact form');
}

// Handle push notifications (future feature)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nowe wiadomości od Lazy Swing Band!',
    icon: '/logo192.png',
    badge: '/favicon.png',
    tag: 'lazy-swing-notification',
    data: {
      url: '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('🎵 Lazy Swing Band', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Handle app shortcuts (future feature for quick access to sections)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('🎵 Lazy Swing Band PWA Service Worker loaded successfully!');
