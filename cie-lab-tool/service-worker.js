self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cie-lab-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icons/icon-192.png',
        './icons/icon-512.png',
        'https://cdn.plot.ly/plotly-latest.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
