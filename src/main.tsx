
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';;
import App from './App.tsx';
import "./shared/styles/global.css";
import "virtual:svg-icons-register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>

);
