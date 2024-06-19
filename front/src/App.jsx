import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home.jsx";
import SideBar from "./components/home/Sidebar.jsx";
import JugadoresList from "./components/jugadores/List.jsx";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="/jugadores" element={<JugadoresList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
