import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./Formulario";
import EditarFormulario from "./EditarFormulario";

function App1() {
  return (
    <Routes>
      <Route path="/jugador/:modo" element={<EditarFormulario />} />
      <Route path="/" element={<Formulario />} />
      <Route path="/jugador/:modo/:id" element={<EditarFormulario />} />
    </Routes>
  );
}

export default App1;
