import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

/* ==========
   jQuery globals
   ========== */
import "./legacy/jquery-globals.js";
import "./legacy/feature-flags.js";

/* ==========
   Legacy JS (that depends on jQuery)
   Import only what you actually use.
   Paths below assume your files are already under src/js/** as you pasted earlier.
   ========== */

// Bootstrap 5 bundle (Popper included) - does NOT need jQuery, but harmless
import "./js/bootstrap.bundle.min.js";

// Nivo slider core + your init
import "./js/slider/jquery.nivo.slider.pack.js";
import "./js/slider/nivo-active.js";

// Countdown (if used by your theme)
import "./js/jquery.countdown.min.js";

// Your Modernizr build references jQuery in your template; import AFTER globals
// import "./js/vendor/modernizr-3.11.2.min.js";

// Aggregators (uncomment if you still need them; our shim plugin will guard $.fn calls)
import "./js/plugins.js";
// import "./js/main.js";

/* ==========
   CSS (keep your existing theme order)
   ========== */
import "./index.css";
import "./css/bootstrap.min.css";
import "./css/core.css";
import "./css/shortcode/shortcodes.css";
// import "./css/style.css";
import "./css/responsive.css";
import "./css/custom.css";
import "./css/color/skin-default.css";

// If you STILL use meanmenu plugin JS, keep its CSS;
// otherwise remove this to avoid unused styles
import "./css/plugins/meanmenu.min.css";
import "./css/color/skin-default.css";
import "./css/plugins/fancybox/jquery.fancybox.css";
import "./css/plugins/animate.css"
import "./css/material-design-iconic-font.min.css"

/* ==========
   Mount React
   ========== */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
