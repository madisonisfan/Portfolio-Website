import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.css";
import "typeface-lobster";
import "typeface-open-sans";
import { EventImageCarousel } from "./features/experience/Complex/EventImageCarousel";
import "./Event-styles-sass.scss";
import "./Home-styles-sass.scss";
import "./contact-styles-sass.scss";
import "./styles-sass.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
