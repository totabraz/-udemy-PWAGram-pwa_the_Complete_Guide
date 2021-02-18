// We CAN NOT use something like:
// self.addEventListener('click', ...) -> because we don’t have a DOM.

// Running at the first time that the page has opened
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Installing Service Worker ... ", event);
});

// Active only will be called after to close the tab, after install.
self.addEventListener("active", function (event) {
  console.log("[Service Worker] Activating Service Worker ... ", event);
  return self.clients.claim();
});

// Where naver the app fetch something,e.g: endpoints, images, ...
self.addEventListener("fetch", function (event) {
  console.log("[Service Worker] Fetching Service Worker ... ", event);
  event.respondWith(fetch(event.request));
});
