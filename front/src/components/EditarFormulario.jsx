import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditarFormulario() {
  const { id } = useParams();

  const [jugador, setJugador] = useState({
    nombre: "",
    fechaDeNacimiento: "",
    edad: 0,
  });

  useEffect(() => {
    axios
      .get(`https://localhost:7033/api/Jugadores/${id}`)
      .then((response) => {
        setJugador(response.data);
      })
      .catch((error) => {
        console.log("error al recuperar los datos del jugador", error);
      });
  }, [id]);

  const handleGuardar = () => {
    axios
      .put(`https://localhost:7033/api/Jugadores/${id}`, jugador)
      .then((response) => {
        alert("Se han actualizado los datos del jugador", response.data);
      })
      .catch((error) => {
        console.log("No se pudieron guardar los datos del jugador", error);
      });
  };

  return (
    <>
      <form onSubmit={handleGuardar}>
        <label>Nombre</label>
        <input
          type="text"
          value={jugador.nombre}
          onChange={(e) => setJugador({ ...jugador, nombre: e.target.value })}
        />
        <button type="sumbit">Guardar</button>
      </form>
    </>
  );
}

export default EditarFormulario;
