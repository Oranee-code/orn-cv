import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { applyTheme, getStoredTheme, getSystemTheme } from "./utils/theme";

const initialTheme = getStoredTheme() ?? getSystemTheme();
applyTheme(initialTheme);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
