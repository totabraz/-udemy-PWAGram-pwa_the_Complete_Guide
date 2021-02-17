if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/sw.js"
      //, {scope: "/help"} // ir wanna to define a scope
    )
    .then(function () {
      console.log("Service worker registered!");
    });
}

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  //   showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
  return false;
});
