import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics/>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
