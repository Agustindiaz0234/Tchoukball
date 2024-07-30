import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home.jsx";
import SideBar from "./components/home/Sidebar.jsx";
import JugadoresList from "./components/jugadores/List.jsx";

import DetailJugadores from "./components/jugadores/Detail.jsx";
// import Cards from "./components/jugadores/Cards.jsx";
import Login from "./components/otros-controlers/Login.jsx";
import AuthRoute from "./components/AuthRoute.jsx";
import Cards from "./components/jugadores/Cards.jsx";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/jugadores"
          element={<AuthRoute element={JugadoresList} fallback={Cards} />}
        />
        <Route path="/jugador/:modo" element={<DetailJugadores />} />
        <Route path="/jugador/:modo/:id" element={<DetailJugadores />} />
      </Routes>
    </div>
  );
}

export default App;
