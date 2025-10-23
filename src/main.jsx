import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
// import "/css/bootstrap.min.css";
// import "/css/core.css";
// import "/css/shortcode/shortcodes.css";
// import "/css/style.css";
// import "/css/responsive.css";
// import "/css/custom.css";
// import "/css/color/skin-default.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
