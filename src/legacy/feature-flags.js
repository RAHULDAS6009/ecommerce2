// Mark JS enabled
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

// Simple touch detection
const hasTouch =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

document.documentElement.classList.add(hasTouch ? "touchevents" : "no-touchevents");

// Add anything else your theme used to rely on via Modernizr classes:
// e.g., webp support flag (async check)
(function checkWebP() {
  const img = new Image();
  img.onload = img.onerror = function () {
    const ok = img.height === 2;
    document.documentElement.classList.add(ok ? "webp" : "no-webp");
  };
  img.src =
    "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
})();
