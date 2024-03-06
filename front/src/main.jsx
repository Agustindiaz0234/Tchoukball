import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cards from "./components/Jugadores.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <Cards /> */}
  </BrowserRouter>,
);
