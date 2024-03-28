import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./components/App1.jsx";
import Cards from "./components/Jugadores.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Formulario from "./components/Formulario.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App1 />
  </BrowserRouter>
);
