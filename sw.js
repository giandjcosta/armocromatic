/* Service worker minimale: cache dell'app per uso offline (Add to Home Screen) */
var CACHE = 'armocromatic-v12';
var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/logo.svg',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './img/hero-autumn.webp',
  './img/hero-winter.webp',
  './img/hero-spring.webp',
  './img/hero-summer.webp',
  './img/capsule-autumn.webp',
  './img/capsule-winter.webp',
  './img/capsule-spring.webp',
  './img/capsule-summer.webp',
  './img/accessories-autumn.webp',
  './img/accessories-winter.webp',
  './img/accessories-spring.webp',
  './img/accessories-summer.webp',
  './img/grooming.webp',
  './img/hero-autumn-donna.webp',
  './img/hero-winter-donna.webp',
  './img/hero-spring-donna.webp',
  './img/hero-summer-donna.webp',
  './img/capsule-autumn-donna.webp',
  './img/capsule-winter-donna.webp',
  './img/capsule-spring-donna.webp',
  './img/capsule-summer-donna.webp',
  './img/accessories-autumn-donna.webp',
  './img/accessories-winter-donna.webp',
  './img/accessories-spring-donna.webp',
  './img/accessories-summer-donna.webp',
  './img/grooming-donna.webp'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.startsWith('armocromatic-') && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (res) {
        if (res && res.ok && new URL(e.request.url).origin === self.location.origin) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () {
        if (e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
