const CACHE_NAME = 'gestion-entreprise-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
  // Vous pouvez ajouter ici d'autres ressources (CSS, images, etc.)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
