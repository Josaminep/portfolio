import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ScrollToTop from "./ScrollToTop"; // import the scroll-to-top component
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <ScrollToTop /> {/* Global scroll-to-top button */}
  </React.StrictMode>
);
