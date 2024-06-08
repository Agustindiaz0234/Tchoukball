import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cards from "./components/Jugadores.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Formulario from "./components/Formulario.jsx";
import "./scss/styles.scss";

import * as bootstrap from "bootstrap";

import Alert from "bootstrap/js/dist/alert";

import { Tooltip, Toast, Popover } from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
