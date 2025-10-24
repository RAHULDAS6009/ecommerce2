import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import "./css/bootstrap.min.css";
import "./css/core.css";
import "./css/shortcode/shortcodes.css";
// import "css/style.css";
import "./css/responsive.css";
import "./css/custom.css";
import "./css/color/skin-default.css";
import "./js/vendor/modernizr-3.11.2.min.js";
import "./js/vendor/jquery-3.6.0.min.js";
import "./js/vendor/jquery-3.6.0.min.js";
import "./js/vendor/jquery-migrate-3.3.2.min.js";
import "./js/bootstrap.bundle.min.js";
import "./js/slider/jquery.nivo.slider.pack.js";
import "./js/slider/nivo-active.js";
import "./js/jquery.countdown.min.js";
// import "./js/plugins.js";
// import "./js/main.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
