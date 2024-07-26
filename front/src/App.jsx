import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home.jsx";
import SideBar from "./components/home/Sidebar.jsx";
import JugadoresList from "./components/jugadores/List.jsx";
import Cards from "./components/jugadores/Cards.jsx";
import DetailJugadores from "./components/jugadores/Detail.jsx";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/jugadores" element={<Cards />}></Route>
        <Route path="/jugador/:modo" element={<DetailJugadores />} />
      </Routes>
    </div>
  );
}

export default App;
