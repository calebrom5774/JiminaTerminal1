self.addEventListener('install', (e) => {
  console.log('吉米娜：神域服務已安裝');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});