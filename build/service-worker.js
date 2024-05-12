
self.addEventListener('install', function(event) {

    console.log('Service worker installing...');
    event.waitUntil(
      caches.open('my-app-cache').then(function(cache) {
        return cache.add('../img/icon.png');
      })
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });