self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', event => {
  // Para que actúe como un proxy, aunque no caches todavía
  event.respondWith(fetch(event.request));
});
