import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
//import { HashRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
/*createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/movie">
    <App />
    </BrowserRouter>
  </StrictMode>,
);*/
