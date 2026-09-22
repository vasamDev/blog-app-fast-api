import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./stylesheets.css";
import { BrowserRouter } from "react-router-dom";

let root = createRoot(document.getElementById("root"));
root.render(
 <StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </StrictMode>,
);
