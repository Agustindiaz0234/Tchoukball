import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.jsx";
import SideNavBar from "./components/Sidebar.jsx";
import Jugadores from "./components/Jugadores.jsx";

function App() {
  return (
    <div>
      <SideNavBar />
      <div style={{ "margin-left": "75px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jugadores" element={<Jugadores />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
