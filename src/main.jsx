import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar></Navbar>
      <App /> 
    </div>
  </StrictMode>
);
