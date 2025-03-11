import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import TagManager from "react-gtm-module";
import { HelmetProvider } from "react-helmet-async";

const tagManagerArgs = {
  gtmId: "GTM-KRT32BLM", 
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>
);
